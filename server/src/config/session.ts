import { config } from "dotenv"
config();
const SESSION_KEY = process.env.SESSION_KEY as string;

import session from "express-session"
import connectPgSimple from "connect-pg-simple"
const pg = connectPgSimple(session)

import pool from "./database.ts"

if (!SESSION_KEY) {
	throw new Error("key is not defined in env variables")
}
export default session({
	store: new pg({ pool, createTableIfMissing: true }),
	secret: SESSION_KEY,
	resave: false,
	saveUninitialized: true,
});

