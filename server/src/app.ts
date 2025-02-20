////const passport = require("./config/passport");





// ------------------------------------------
import { config } from "dotenv"
config();
const { PORT } = process.env
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import express from "express"
import path from "node:path"
import flash from "connect-flash"
import sessionConfig from "./config/session.ts"

import cors from "cors"


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();




//Middleware to parse request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Middleware for CORS with React
app.use(cors({ origin: 'http//localhost:5174' }));

// Session & flash messages
app.use(sessionConfig);
app.use(flash());

//Authentication Middleware
//app.use(passport.initialize());
//app.use(passport.session());


// Serve React build files
app.use(express.static(path.join(__dirname, 'client/dist')));



// Routes
app.get("*", (__, res) => {
	res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(PORT, () => {
	console.log(`Server Running on http/localhost:${PORT}`);
})
