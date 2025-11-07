package main

import (
	"encoding/json"
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os"
	"sort"
	"strconv"

	"github.com/xuri/excelize/v2"
	"phonebook.astu.ru/pkg/models"
)

func (app *application) home(w http.ResponseWriter, r *http.Request) {

	files := []string{
		"./ui/html/main.html",
	}
	units, err := app.units.GetUn(app.ctx)
	audit, err := app.audit.GetAudit(app.ctx)

	//app.authorized(w, r) ДОЛЖНО БЫТЬ КЭШИРОВАНИЕ НО Я НЕ ДОДУМАЛ КАК С НИМ РАБОТАТЬ

	ts, err := template.ParseFiles(files...)
	if err != nil {
		app.serverError(w, err)
		return
	}

	data := struct {
		Units []*models.Units
		Audit *models.Table_audit
	}{
		Units: units,
		Audit: audit,
	}

	err = ts.Execute(w, data)
	if err != nil {
		app.serverError(w, err)
		return
	}
}

func sortedEmUn(emun []*models.EmpUnit) []*models.EmpUnit {
	for i := 0; i < len(emun); i++ {
		sort.Slice(emun[i].Employees, func(j, z int) bool {
			return emun[i].Employees[j].SerialNum < emun[i].Employees[z].SerialNum
		})
	}
	return emun
}

func (app *application) handlerSearch(w http.ResponseWriter, r *http.Request) {
	query := r.URL.Query().Get("q")
	if query != "" {
		emp, err := app.employees.GetSearchEmp(app.ctx, query)
		if err != nil {
			app.errorLog.Fatal(err)
		}
		unit, err := app.units.GetUn(app.ctx)
		if err != nil {
			app.errorLog.Fatal(err)
		}
		emun := app.UnifEmpUnit(emp, unit)
		emun = sortedEmUn(emun)
		w.Header().Set("Content-Type", "application/json; charset=utf-8")
		json.NewEncoder(w).Encode(emun)
	} else if query == "" {
		http.Redirect(w, r, "/", 200)
	}
}

func (app *application) AdminPage(w http.ResponseWriter, r *http.Request) {
	type AdminConfig struct {
		Login string `json:"login"`
		Pass  string `json:"pass"`
	}
	file, err := os.ReadFile("./admin.json")
	if err != nil {
		log.Fatal(err)
	}
	var config AdminConfig
	err = json.Unmarshal(file, &config)
	if r.Method == "POST" {
		login := r.FormValue("login")
		pass := r.FormValue("password")
		if login != "" && pass != "" {
			if login == config.Login && pass == config.Pass {
				app.flag = true
				http.Redirect(w, r, "/admin", http.StatusFound)
				return
			} else {
				http.Redirect(w, r, "/", http.StatusFound)
				return
			}
		} else {
			http.Redirect(w, r, "author", http.StatusFound)
			return
		}
	} else {
		files := []string{
			"./ui/html/login.html",
		}

		ts, err := template.ParseFiles(files...)
		if err != nil {
			app.serverError(w, err)
			return
		}

		err = ts.Execute(w, nil)
		if err != nil {
			app.serverError(w, err)
			return
		}
	}
}

func (app *application) AdminInter(w http.ResponseWriter, r *http.Request) {
	if app.flag {
		files := []string{
			"./ui/html/adminForm.html",
		}

		units, err := app.units.GetUn(app.ctx)
		if err != nil {
			app.errorLog.Fatal(err)
		}
		employess, err := app.employees.GetEmp(app.ctx)
		if err != nil {
			app.errorLog.Fatal(err)
		}
		emun := app.UnifEmpUnit(employess, units)
		emun = sortedEmUn(emun)

		if r.Header.Get("Accept") == "application/json" {
			w.Header().Set("Content-Type", "application/json")
			if err := json.NewEncoder(w).Encode(emun); err != nil {
				app.serverError(w, err)
			}
			return
		}

		//app.authorized(w, r) ДОЛЖНО БЫТЬ КЭШИРОВАНИЕ НО Я НЕ ДОДУМАЛ КАК С НИМ РАБОТАТЬ

		ts, err := template.ParseFiles(files...)
		if err != nil {
			app.serverError(w, err)
			return
		}

		data := struct {
			Units []*models.Units
		}{
			Units: units,
		}

		err = ts.Execute(w, data)
		if err != nil {
			app.serverError(w, err)
			return
		}
	} else {
		http.Redirect(w, r, "/author", http.StatusFound)
		return
	}

}

func (app application) getEmployeesHandler(w http.ResponseWriter, r *http.Request) {
	employees, err := app.employees.GetEmp(app.ctx)
	if err != nil {
		app.errorLog.Fatal(err)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(employees)
}

func (app application) createEmpHandler(w http.ResponseWriter, r *http.Request) {
	var emp *models.Employees
	if err := json.NewDecoder(r.Body).Decode(&emp); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	fmt.Println(emp)

	err := app.employees.CreateEm(app.ctx, emp)
	fmt.Println(err)

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(emp); err != nil {
		app.errorLog.Printf("Error encoding JSON: %v", err)
		http.Error(w, `{"error": "JSON encoding error"}`, http.StatusInternalServerError)
		return
	}
}

func (app application) updateEmpHandler(w http.ResponseWriter, r *http.Request) {
	id := r.URL.Query().Get("id")

	var emp *models.Employees

	if err := json.NewDecoder(r.Body).Decode(&emp); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	emp.ID, _ = strconv.Atoi(id)

	_ = app.employees.UpdateEm(app.ctx, emp)
	/*if err != nil {
		app.errorLog.Println(err)
	}*/

	w.WriteHeader(http.StatusOK)
}

func (app application) deleteEmpHandler(w http.ResponseWriter, r *http.Request) {
	id := r.URL.Query().Get("id")

	_ = app.employees.DelEm(app.ctx, id)

	w.WriteHeader(http.StatusOK)
}

func (app application) getUnitsHandler(w http.ResponseWriter, r *http.Request) {
	units, err := app.units.GetUn(app.ctx)
	if err != nil {
		app.errorLog.Printf("Error getting units: %v", err)
		http.Error(w, `{"error": "Internal server error"}`, http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(units); err != nil {
		app.errorLog.Printf("Error encoding JSON: %v", err)
		http.Error(w, `{"error": "JSON encoding error"}`, http.StatusInternalServerError)
		return
	}
}

func (app application) createUnitHandler(w http.ResponseWriter, r *http.Request) {
	var unit *models.Units
	if err := json.NewDecoder(r.Body).Decode(&unit); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	_ = app.units.CreateUn(app.ctx, unit)

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(unit); err != nil {
		app.errorLog.Printf("Error encoding JSON: %v", err)
		http.Error(w, `{"error": "JSON encoding error"}`, http.StatusInternalServerError)
		return
	}
}

func (app application) updateUnitHandler(w http.ResponseWriter, r *http.Request) {
	id := r.URL.Query().Get("id")

	var unit *models.Units

	if err := json.NewDecoder(r.Body).Decode(&unit); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	unit.ID, _ = strconv.Atoi(id)

	_ = app.units.UpdateUn(app.ctx, unit)
	/*if err != nil {
		app.errorLog.Println(err)
	}*/

	w.WriteHeader(http.StatusOK)
}

func (app application) deleteUnitHandler(w http.ResponseWriter, r *http.Request) {
	id := r.URL.Query().Get("id")

	_ = app.units.DelUn(app.ctx, id)

	w.WriteHeader(http.StatusOK)
}

func (app *application) ExcelDownload(w http.ResponseWriter, r *http.Request) {
	// Создаем новый файл Excel
	f := excelize.NewFile()
	defer f.Close()

	// Устанавливаем название листа
	f.SetSheetName("Sheet1", "Справочник")

	// Получаем данные
	emp, err := app.employees.GetEmp(app.ctx)
	if err != nil {
		app.errorLog.Fatal(err)
		http.Error(w, "Ошибка получения сотрудников", http.StatusInternalServerError)
		return
	}

	unit, err := app.units.GetUn(app.ctx)
	if err != nil {
		app.errorLog.Fatal(err)
		http.Error(w, "Ошибка получения отделов", http.StatusInternalServerError)
		return
	}

	emun := app.UnifEmpUnit(emp, unit)
	emun = sortedEmUn(emun)

	currentRow := 1 // Начинаем с 1 строки (в Excel строки начинаются с 1)

	// Создаем стиль для объединенных ячеек отделов
	departmentStyle, err := f.NewStyle(&excelize.Style{
		Fill: excelize.Fill{
			Type:    "pattern",
			Color:   []string{"#0c2b59"},
			Pattern: 1,
		},
		Font: &excelize.Font{
			Bold:  true,
			Size:  14,
			Color: string("#ffffff"),
		},
		Alignment: &excelize.Alignment{
			Horizontal: "center",
			Vertical:   "center",
		},
	})
	if err != nil {
		app.errorLog.Printf("Ошибка создания стиля: %v", err)
	}

	// Создаем стиль для заголовков сотрудников
	headerStyle, err := f.NewStyle(&excelize.Style{
		Font: &excelize.Font{
			Bold: true,
		},
		Fill: excelize.Fill{
			Type:    "pattern",
			Color:   []string{"#6a94d3"},
			Pattern: 1,
		},
	})

	cellStyle, err := f.NewStyle(&excelize.Style{
		Font: &excelize.Font{
			Size: 14,
		},
	})

	if err != nil {
		app.errorLog.Printf("Ошибка создания стиля заголовков: %v", err)
	}

	// Добавляем заголовки для данных сотрудников (если нужно)
	headers := []string{"Должность", "Номер", "ФИО", "Email", "Кабинет"}
	for i, header := range headers {
		cell, _ := excelize.CoordinatesToCellName(i+1, currentRow)
		f.SetCellValue("Справочник", cell, header)
		if headerStyle != 0 {
			f.SetCellStyle("Справочник", cell, cell, headerStyle)
		}
	}
	currentRow++

	for _, v := range emun {
		// Объединяем ячейки для отдела (A:E - 5 колонок)
		startCell, _ := excelize.CoordinatesToCellName(1, currentRow) // A
		endCell, _ := excelize.CoordinatesToCellName(5, currentRow)   // E

		err := f.MergeCell("Справочник", startCell, endCell)
		if err != nil {
			app.errorLog.Printf("Ошибка объединения ячеек: %v", err)
		}

		// Заполняем объединенную ячейку данными отдела
		f.SetCellValue("Справочник", startCell, v.Unit.Label+" - "+v.Unit.Email)

		// Применяем стиль к объединенной ячейке
		if departmentStyle != 0 {
			f.SetCellStyle("Справочник", startCell, endCell, departmentStyle)
		}

		currentRow++

		// Добавляем сотрудников отдела
		for _, w := range v.Employees {
			// Заполняем данные сотрудника
			f.SetCellValue("Справочник", "A"+strconv.Itoa(currentRow), w.JobTitle)
			f.SetCellStyle("Справочник", "A"+strconv.Itoa(currentRow), "A"+strconv.Itoa(currentRow), cellStyle)
			f.SetCellValue("Справочник", "B"+strconv.Itoa(currentRow), w.ShortNum)
			f.SetCellStyle("Справочник", "B"+strconv.Itoa(currentRow), "B"+strconv.Itoa(currentRow), cellStyle)
			f.SetCellValue("Справочник", "C"+strconv.Itoa(currentRow), w.Fio)
			f.SetCellStyle("Справочник", "C"+strconv.Itoa(currentRow), "C"+strconv.Itoa(currentRow), cellStyle)
			f.SetCellValue("Справочник", "D"+strconv.Itoa(currentRow), w.Email)
			f.SetCellStyle("Справочник", "D"+strconv.Itoa(currentRow), "D"+strconv.Itoa(currentRow), cellStyle)
			f.SetCellValue("Справочник", "E"+strconv.Itoa(currentRow), w.Cabinet)
			f.SetCellStyle("Справочник", "E"+strconv.Itoa(currentRow), "E"+strconv.Itoa(currentRow), cellStyle)

			currentRow++
		}

		// Добавляем пустую строку между отделами для лучшей читаемости
		currentRow++
	}

	// Устанавливаем авто-ширину колонок для лучшего отображения
	f.SetColWidth("Справочник", "A", "A", 100) // Должность
	f.SetColWidth("Справочник", "B", "B", 15)  // Короткий номер
	f.SetColWidth("Справочник", "C", "C", 50)  // ФИО
	f.SetColWidth("Справочник", "D", "D", 35)  // Email
	f.SetColWidth("Справочник", "E", "E", 20)  // Кабинет

	// Устанавливаем заголовки HTTP ответа
	w.Header().Set("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	w.Header().Set("Content-Disposition", "attachment; filename=Phonebook.xlsx")
	w.Header().Set("Content-Transfer-Encoding", "binary")
	w.Header().Set("Expires", "0")

	// Записываем файл в ResponseWriter
	if err := f.Write(w); err != nil {
		app.errorLog.Printf("Ошибка записи Excel файла: %v", err)
		http.Error(w, "Ошибка при создании файла", http.StatusInternalServerError)
		return
	}
}
