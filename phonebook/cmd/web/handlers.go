package main

import (
	"encoding/json"
	"fmt"
	"html/template"
	"net/http"
	"sort"
	"strconv"

	"phonebook.astu.ru/pkg/models"
)

func (app *application) home(w http.ResponseWriter, r *http.Request) {

	files := []string{
		"./ui/html/main.html",
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
	if r.Method == "POST" {
		login := r.FormValue("login")
		pass := r.FormValue("password")
		if login != "" && pass != "" {
			if login == "admin" && pass == "qwe123" {
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
	fmt.Println(app.flag)
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

	_ = app.employees.CreateEm(app.ctx, emp)

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
