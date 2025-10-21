package postgresql

import (
	"context"
	"errors"

	"github.com/jackc/pgx/v5"
	"phonebook.astu.ru/pkg/models"
)

type UnitsModel struct {
	DB *pgx.Conn
}

func (m *UnitsModel) GetUn(ctx context.Context) ([]*models.Units, error) {
	stmt := "select id, label, serialnum, visible, email, phone from units order by serialnum"

	rows, err := m.DB.Query(ctx, stmt)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var units []*models.Units

	for rows.Next() {
		u := &models.Units{}
		err := rows.Scan(
			&u.ID,
			&u.Label,
			&u.SerialNum,
			&u.Visible,
			&u.Email,
			&u.Phone,
		)
		if err != nil {
			return nil, err
		}
		units = append(units, u)
	}
	if err = rows.Err(); err != nil {
		return nil, err
	}

	return units, nil
}

func (m *UnitsModel) DelUn(ctx context.Context, id string) error {
	if id == "" {
		return errors.New("id cannot be empty")
	}
	stmt := "delete from units where id = $1"

	err := m.DB.QueryRow(ctx, stmt, id).Scan()
	if err != nil {
		return err
	} else {
		return nil
	}

}

func (m *UnitsModel) CreateUn(ctx context.Context, u *models.Units) error {
	stmt := "insert into units (label, serialnum, visible, email, phone) values ($1, $2, $3, $4, $5)"
	var result int
	if err := m.DB.QueryRow(ctx, stmt, u.Label, u.SerialNum, u.Visible, u.Email, u.Phone).Scan(&result); err != nil {
		return err
	} else {
		return nil
	}
}

func (m *UnitsModel) UpdateUn(ctx context.Context, u *models.Units) error {
	stmt := "update units set label = $1, serialnum = $2, visible = $3, email = $4, phone = $5 where id = $6"
	if err := m.DB.QueryRow(ctx, stmt, u.Label, u.SerialNum, u.Visible, u.Email, u.Phone, u.ID).Scan(); err != nil {
		return err
	} else {
		return nil
	}
}
