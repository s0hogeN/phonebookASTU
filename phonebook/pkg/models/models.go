package models

import (
	"errors"
)

var ErrorNoRecord = errors.New("models: подходящей записи не найдено")

// Пользователь
type Employees struct {
	ID       int    `json:"id"`        // Индекс сотрудника
	Fio      string `json:"fio"`       // ФИО сотрудника
	Unit     string `json:"unit"`      // Подразделение
	JobTitle string `json:"job_title"` // Должность
	Email    string `json:"email"`     // Почта
	Cabinet  string `json:"cabinet"`   // Номер кабинета
	ShortNum string `json:"short_num"` // Короткий номер
}

type Users struct {
	ID    int
	Login string
	Pass  string
}
