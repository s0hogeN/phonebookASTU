package postgresql

import (
	"context"

	"github.com/jackc/pgx/v5"
	"phonebook.astu.ru/pkg/models"
)

type UnitsModel struct {
	DB *pgx.Conn
}

func (m *UnitsModel) GetUn(ctx context.Context) ([]*models.Units, error) {
	stmt := "select id, label, serialnum from units"

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
