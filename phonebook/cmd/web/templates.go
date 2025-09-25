package main

import (
	"html/template"
	"path/filepath"

	"phonebook.astu.ru/pkg/models"
)

type templateData struct {
	//BusTicket  *models.BusTicket
	//BusTickets []*models.BusTicket
	Employee  *models.Employees
	Employees []*models.Employees

	Unit  *models.Units
	Units []*models.Units

	EmpUnit  *models.EmpUnit
	EmpUnitS []*models.EmpUnit
}

func newTemplateCache(dir string) (map[string]*template.Template, error) {
	cache := map[string]*template.Template{}

	pages, err := filepath.Glob(filepath.Join(dir, "*.page.html"))
	if err != nil {
		return nil, err
	}

	for _, page := range pages {
		name := filepath.Base(page)

		ts, err := template.ParseFiles(page)
		if err != nil {
			return nil, err
		}

		ts, err = ts.ParseGlob(filepath.Join(dir, "*.layout.html"))
		if err != nil {
			return nil, err
		}
		cache[name] = ts
	}
	return cache, nil

}
