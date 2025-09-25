package postgresql

import (
	"context"

	"github.com/jackc/pgx/v5"
	"phonebook.astu.ru/pkg/models"
)

type EmployeesModel struct {
	DB *pgx.Conn
}

func (m *EmployeesModel) GetEmp(ctx context.Context) ([]*models.Employees, error) {
	stmt := "select fio, unit, job_title, email, cabinet, short_num from employees order by unit"

	rows, err := m.DB.Query(ctx, stmt)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var emp []*models.Employees

	for rows.Next() {
		e := &models.Employees{}
		err := rows.Scan(
			&e.Fio,
			&e.Unit,
			&e.JobTitle,
			&e.Email,
			&e.Cabinet,
			&e.ShortNum,
		)
		if err != nil {
			return nil, err
		}
		emp = append(emp, e)
	}
	if err = rows.Err(); err != nil {
		return nil, err
	}

	return emp, nil
}

func (m *EmployeesModel) GetSearchEmp(ctx context.Context, q string) ([]*models.Employees, error) {
	query := "%" + q + "%"

	stmt := "select fio, unit, job_title, email, cabinet, short_num from employees where fio ilike $1 or unit ilike $1 or email ilike $1 or short_num ilike $1 or job_title ilike $1 or cabinet ilike $1 or unit_general ilike $1 order by id"

	rows, err := m.DB.Query(ctx, stmt, query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var emp []*models.Employees

	for rows.Next() {
		e := &models.Employees{}
		err := rows.Scan(
			&e.Fio,
			&e.Unit,
			&e.JobTitle,
			&e.Email,
			&e.Cabinet,
			&e.ShortNum,
		)

		if err != nil {
			return nil, err
		}
		emp = append(emp, e)
	}
	if err = rows.Err(); err != nil {
		return nil, err
	}

	return emp, nil
}
