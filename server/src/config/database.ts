import { config } from "dotenv"
config();

import pkg from "pg"
const { Pool } = pkg
const { HOST, USER, DATABASE, PASSWORD, SQL_PORT } = process.env;

const pool = new Pool({
	host: HOST,
	user: USER,
	database: DATABASE,
	password: PASSWORD,
	port: Number(SQL_PORT),
});

export default pool;

