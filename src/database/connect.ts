import postgres from "postgres";

const sql = postgres({
  database: "demo-bun",
  username: "phamthanhhung",
  host: "localhost",
  password: "hung1912",
  port: 5432,
});
const [{ version }] = await sql`SELECT version()`;
