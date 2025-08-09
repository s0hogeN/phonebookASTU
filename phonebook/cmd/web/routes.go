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

	//mux.HandleFunc("GET /admin/users/", app.adminUsers)
	//mux.HandleFunc("GET /admin/shop", app.adminShop)

	fileServer := http.FileServer(http.Dir("./ui/static/"))
	mux.Handle("/static/", http.StripPrefix("/static/", fileServer))

	return mux
}
