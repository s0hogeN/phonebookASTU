package main

import (
	"context"
	"flag"
	"html/template"
	"log"
	"net/http"
	"os"

	"phonebook.astu.ru/pkg/models/postgresql"

	"github.com/jackc/pgx/v5"
)

type application struct {
	errorLog      *log.Logger
	infoLog       *log.Logger
	ctx           context.Context
	employees     *postgresql.EmployeesModel
	users         *postgresql.UsersModel
	units         *postgresql.UnitsModel
	templateCache map[string]*template.Template
	flag          bool
}

func main() {
	ctx := context.Background()

	addr := flag.String("addr", ":8080", "Сетевой адрес HTTP")
	dsn := flag.String("dsn", "postgres://phone_admin:qwe123@localhost:5432/phonebook", "Название PostgreSQL источника данных")
	flag.Parse()

	infoLog := log.New(os.Stdout, "INFO\t", log.Ldate|log.Ltime)
	errorLog := log.New(os.Stdout, "ERROR\t", log.Ldate|log.Ltime|log.Lshortfile)

	templateCache, err := newTemplateCache("./ui/html")
	if err != nil {
		errorLog.Fatal(err)
	}

	db, err := openDB(ctx, *dsn)
	if err != nil {
		errorLog.Fatal(err)
	}

	defer db.Close(ctx)

	app := &application{
		errorLog:      errorLog,
		infoLog:       infoLog,
		ctx:           ctx,
		employees:     &postgresql.EmployeesModel{DB: db},
		units:         &postgresql.UnitsModel{DB: db},
		templateCache: templateCache,
		flag:          false,
	}

	srv := &http.Server{
		Addr:     *addr,
		ErrorLog: errorLog,
		Handler:  app.routes(),
	}

	infoLog.Printf("Запуск сервера на %s", *addr)
	err = srv.ListenAndServe()
	errorLog.Fatal(err)
}

func openDB(ctx context.Context, dsn string) (*pgx.Conn, error) {
	conn, err := pgx.Connect(ctx, dsn)
	if err != nil {
		return nil, err
	}
	if err = conn.Ping(ctx); err != nil {
		return nil, err
	}
	return conn, nil
}
