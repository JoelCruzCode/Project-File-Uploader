declare global {
	namespace Express {
		interface User {
			id: number;
			username: string;
			email: string;
			passwordHash: string;
		}
	}
}

interface Done {
	(error: any, user?: Express.User | false, options?: { message: string }): void;
}

import bcrypt from "bcryptjs"
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { getUser } from "../models/userModel.ts";


const loginCallBack = async function(username: string, password: string, done: Done) {
	try {
		const user = await getUser(username)
		if (!user) {
			return done(null, false, {
				message: `Username "${username}" doesn't exist`
			}
			)
		}

		const match = await bcrypt.compare(password, user?.passwordHash);

		if (match) {
			return done(null, user);
		}

		return done(null, false, { message: "Incorrect password" })

	} catch (error) {
		return done(error)
	}
}

const loginStrategy = new LocalStrategy(loginCallBack)

passport.use("local-login", loginStrategy)

// CB function assigns user.id to the session when passport authenticates
passport.serializeUser((user: Express.User, done) => {
	done(null, user.username);
})


// Once authenticated CB function assigns req.user on every request
passport.deserializeUser(async (username: string, done) => {
	getUser(username)
		.then((user) => {
			done(null, user);

		}).catch((error) => done(error));

})

export default passport
