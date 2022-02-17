package database

import (
	"context"
	"fmt"
	"os"

	"github.com/jackc/pgx/v4"
)

func Connect() *pgx.Conn {
	conn, err := pgx.Connect(context.Background(), os.Getenv("DATABASE_URL"))
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}

	var res int
	err = conn.QueryRow(context.Background(), "select 1").Scan(&res)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Database connection not working: %v\n", err)
		os.Exit(1)
	}
	return conn
}
