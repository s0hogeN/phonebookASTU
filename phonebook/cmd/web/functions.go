package main

import (
	"phonebook.astu.ru/pkg/models"
)

func (app *application) UnifEmpUnit(emp []*models.Employees, un []*models.Units) []*models.EmpUnit {
	var empun []*models.EmpUnit
	for i := 0; i < len(un); i++ {
		eu := &models.EmpUnit{}
		eu.Unit = *un[i]
		for j := 0; j < len(emp); j++ {
			if emp[j].Unit == un[i].Label {
				eu.Employees = append(eu.Employees, *emp[j])
			}
		}
		empun = append(empun, eu)
	}

	return empun
}
