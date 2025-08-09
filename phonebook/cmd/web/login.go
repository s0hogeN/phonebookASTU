package main

import (
	"net/http"
	"strings"
)

func (app *application) Login(w http.ResponseWriter, r *http.Request) {
	login := strings.TrimSpace(r.FormValue("login"))
	password := strings.TrimSpace(r.FormValue("password"))

	_, err := app.users.Login(app.ctx, login, password)
	if err != nil {
		//app.loginPage(w, r)
		app.errorLog.Printf("Ошибка возможно")
		return
	}
	app.flag = true
	if login == "admin" {
		http.Redirect(w, r, "/admin/", http.StatusSeeOther)
	} else if login == "kassa" {
		http.Redirect(w, r, "/kassa/", http.StatusSeeOther)
	} else {
		http.Redirect(w, r, "/", http.StatusSeeOther)
	}
}
