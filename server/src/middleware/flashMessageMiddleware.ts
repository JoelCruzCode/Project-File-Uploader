import { Request, Response, NextFunction } from "express"

interface SuccessMessage {
	msg: string
}

declare global {
	namespace Express {
		interface Request {
			flash: {
				event: boolean,
				type: string,
				message: string[] | SuccessMessage[];
				set: (type: string, message: string | string[]) => void
				reset: () => void
			},

		}

	}
}

declare module 'express-session' {
	interface SessionData {
		flash: {
			event: boolean;
			type: string;
			message: SuccessMessage[] | string[];
			//set: (type: string, message: string | string[]) => void
			//reset: () => void
		}
	}
}





export const flashMiddleware = (req: Request, res: Response, next: NextFunction) => {
	if (!req.session.flash) {
		console.log('req.session.flash doesnt exist, creating')
		req.session.flash = {
			event: false, type: "", message: []
		}
	}

	if (req.session.flash.event) {
		console.log('event reached?')
		res.json({ ...req.session.flash })
		// works but if the user reloads the page event will still be true.
		// should i pass it to responseData , then reset session then return the responsData

		flash.reset(req);
		return

	}
	next();
}


const flashService = () => {
	return {
		set: (req: Request, type: string, message: string | string[]) => {

			const messageArray = Array.isArray(message) ? message : [message];

			let formattedMessage;
			if (type === "success") {
				formattedMessage = messageArray.map((msg) => {
					return { msg: msg };
				});

			}
			req.session.flash = { event: true, type, message: formattedMessage || messageArray };
		},
		reset: (req: Request) => {
			req.session.flash = { event: false, type: "", message: [] }
		}
	}
}


export const flash = flashService();


