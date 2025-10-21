package main

import (
	"net/http"
)

func (app *application) routes() *http.ServeMux {
	mux := http.NewServeMux()
	mux.HandleFunc("/", app.home)
	//mux.HandleFunc("GET /bus/", app.busPage)
	mux.HandleFunc("/search", app.handlerSearch)
	mux.HandleFunc("/author", app.AdminPage)
	mux.HandleFunc("/admin", app.AdminInter)

	// API для сотрудников
	mux.HandleFunc("GET /api/employees", app.getEmployeesHandler)
	mux.HandleFunc("POST /api/employees", app.createEmpHandler)
	mux.HandleFunc("PUT /api/employees/{id}", app.updateEmpHandler)
	mux.HandleFunc("DELETE /api/employees/{id}", app.deleteEmpHandler)

	// API для подразделений
	mux.HandleFunc("GET /api/units", app.getUnitsHandler)
	mux.HandleFunc("POST /api/units", app.createUnitHandler)
	mux.HandleFunc("PUT /api/units/unitsup", app.updateUnitHandler)
	mux.HandleFunc("DELETE /api/unitsdel", app.deleteUnitHandler)

	//mux.HandleFunc("GET /admin/users/", app.adminUsers)
	//mux.HandleFunc("GET /admin/shop", app.adminShop)

	fileServer := http.FileServer(http.Dir("./ui/static/"))
	mux.Handle("/static/", http.StripPrefix("/static/", fileServer))

	return mux
}
