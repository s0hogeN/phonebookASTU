package postgresql

import (
	"context"

	"github.com/jackc/pgx/v5"
	"phonebook.astu.ru/pkg/models"
)

type AuditModel struct {
	DB *pgx.Conn
}

func (m *AuditModel) GetAudit(ctx context.Context) (*models.Table_audit, error) {
	stmt := "select to_char(max(last_modified), 'dd.mm.yyyy') from table_audit;"

	audit := &models.Table_audit{}
	err := m.DB.QueryRow(ctx, stmt).Scan(&audit.LastMod)
	if err != nil {
		return nil, err
	}
	return audit, nil

}
