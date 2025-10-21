package postgresql

import (
	"context"
	"errors"

	"github.com/jackc/pgx/v5"
	"phonebook.astu.ru/pkg/models"
)

type EmployeesModel struct {
	DB *pgx.Conn
}

func (m *EmployeesModel) GetEmp(ctx context.Context) ([]*models.Employees, error) {
	stmt := "select id, fio, unit, job_title, email, cabinet, short_num, unit_general, serialnum from employees order by id"

	rows, err := m.DB.Query(ctx, stmt)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var emp []*models.Employees

	for rows.Next() {
		e := &models.Employees{}
		err := rows.Scan(
			&e.ID,
			&e.Fio,
			&e.Unit,
			&e.JobTitle,
			&e.Email,
			&e.Cabinet,
			&e.ShortNum,
			&e.UnitGen,
			&e.SerialNum,
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

func (m *EmployeesModel) DelEm(ctx context.Context, id string) error {
	if id == "" {
		return errors.New("id cannot be empty")
	}
	stmt := "delete from employees where id = $1"

	err := m.DB.QueryRow(ctx, stmt, id).Scan()
	if err != nil {
		return err
	} else {
		return nil
	}

}

func (m *EmployeesModel) CreateEm(ctx context.Context, e *models.Employees) error {
	stmt := "insert into employees (fio, unit, job_title, email, cabinet, short_num, unit_general, serialnum) values ($1, $2, $3, $4, $5, $6, $7, $8)"
	var result int
	if err := m.DB.QueryRow(ctx, stmt, e.Fio, e.Unit, e.JobTitle, e.Email, e.Cabinet, e.ShortNum, e.UnitGen, e.SerialNum).Scan(&result); err != nil {
		return err
	} else {
		return nil
	}
}

func (m *EmployeesModel) UpdateEm(ctx context.Context, e *models.Employees) error {
	stmt := "update employees set fio = $1, unit = $2, job_title = $3, email = $4, cabinet = $5, short_num = $6, unit_general = $7, serialnum = $8 where id = $9"
	if err := m.DB.QueryRow(ctx, stmt, e.Fio, e.Unit, e.JobTitle, e.Email, e.Cabinet, e.ShortNum, e.UnitGen, e.SerialNum, e.ID).Scan(); err != nil {
		return err
	} else {
		return nil
	}
}
