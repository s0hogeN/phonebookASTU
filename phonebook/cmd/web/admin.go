package main

import (
	"html/template"
	"net/http"
)

func (app *application) adminPage(w http.ResponseWriter, r *http.Request) {
	files := []string{
		"./ui/html/admin.page.html",
		"./ui/html/admin.base.html",
		"./ui/html/admin.head.html",
		"./ui/html/admin.nav.html",
		"./ui/html/footer.layout.html",
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
