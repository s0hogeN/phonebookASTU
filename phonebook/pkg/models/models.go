package models

import (
	"errors"
)

var ErrorNoRecord = errors.New("models: подходящей записи не найдено")

// Сотрудники
type Employees struct {
	ID       int    `json:"id"`        // Индекс сотрудника
	Fio      string `json:"fio"`       // ФИО сотрудника
	Unit     string `json:"unit"`      // Подразделение
	JobTitle string `json:"job_title"` // Должность
	Email    string `json:"email"`     // Почта
	Cabinet  string `json:"cabinet"`   // Номер кабинета
	ShortNum string `json:"short_num"` // Короткий номер
}

// Подразделения
type Units struct {
	ID        int    `json:"id"`
	Label     string `json:"label"`
	SerialNum int    `json:"serialnum"`
}

// Подразделения с сотрудниками
type EmpUnit struct {
	Unit      Units       `json:"unit"`
	Employees []Employees `json:"employees"`
}

type Users struct {
	ID    int
	Login string
	Pass  string
}
