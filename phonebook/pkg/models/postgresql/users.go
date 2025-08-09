package postgresql

import (
	"context"

	"github.com/jackc/pgx/v5"
)

type UsersModel struct {
	DB *pgx.Conn
}

func (m *UsersModel) Select(ctx context.Context) {

}

func (m *UsersModel) Login(ctx context.Context, login string, password string) (bool, error) {

	return true, nil
}
