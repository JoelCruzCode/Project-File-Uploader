////const passport = require("./config/passport");
import dotenv from "dotenv"
dotenv.config()
const { PORT } = process.env
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import express, { NextFunction, Request, Response } from "express"
import path from "node:path"
import prismaSession from "./config/session.ts";
import passport from "./config/passport.ts";
import cors from "cors"
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { handleValidationErrors, loginValidation, registerValidation } from "./middleware/validationMiddleware.ts";
import { flashMiddleware } from "./middleware/flashMessageMiddleware.ts";

const app = express();
import { flash } from "./middleware/flashMessageMiddleware.ts";
import { createUser } from "./models/userModel.ts";

//Middleware to parse request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Middleware for CORS with React
app.use(cors({ origin: 'http://localhost:5174' }));

// Session & flash messages
app.use(prismaSession);
app.use(flashMiddleware);

//Authentication Middleware
app.use(passport.initialize());
app.use(passport.session());


// Serve React build files
app.use(express.static(path.join(__dirname, 'client/dist')));



// Routes
app.get("/api/home", (__: Request, res: Response) => {
	res.json({ greet: "Hello React, from Express!" })
})
//
app.get("/api/register", (req: Request, res: Response) => {
})

app.post("/api/register", registerValidation, handleValidationErrors(), (req: Request, res: Response) => {
	// query params vs existing usernames and emails
	try {
		console.log('req.body', req.body)
		const { username, email, password } = req.body;
		createUser({ username, email, password })

		flash.set(req, "success", ["Successfully created Account"])

		const responseData = { ...req.session.flash }
		console.log('registerpost response data', responseData)
		//flash.reset(req);
		console.log(req.session.flash?.event, 'true?')
		if (req.session.flash?.event) {
			console.log('event is true while posting in registered')
		}
		res.json(responseData)
	} catch (error) {
		console.log('catch', error)
	}



}
)

app.get("/api/login", (req, res) => {
	console.log("redirect to api/login")
})

app.post("/api/login", loginValidation, handleValidationErrors(), (req: Request, res: Response, next: NextFunction) => {
	passport.authenticate("local-login", (error: any, user: Express.User, info: { message: string }, status: number) => {
		if (error) {
			flash.set(req, "error", [`${status} error: ${error}. ${info.message}`])
			return next(error);
		}
		if (!user) {
			flash.set(req, "error", info.message)
			return res.status(401).json({ flash: req.session.flash })
		}
		req.logIn(user, (loginError) => {
			if (loginError) {
				return next(loginError);
			}
			flash.set(req, "success", info.message);
			return res.json({ flash: req.session.flash });
		})
	})(req, res, next);
})

app.get("*", (__: Request, res: Response) => {
	res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(PORT, () => {
	console.log(`Server Running on http/localhost:${PORT}`);
})
