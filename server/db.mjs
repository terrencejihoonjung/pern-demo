import pg from "pg";
const { Pool } = pg;

// Create a PostgreSQL connection pool
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "perntodo",
  password: "Turtles.0928",
  port: 5432, // PostgreSQL default port
});

export default pool;
