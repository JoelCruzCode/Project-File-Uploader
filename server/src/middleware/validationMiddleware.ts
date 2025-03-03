
import { Request, Response, NextFunction } from "express"
import { body, validationResult, Result } from "express-validator";
import { flash } from "./flashMessageMiddleware.ts";

const MIN = 3
const MAX = 16

const alphaError = "must only contain letters";
const confirmPWError = "input must match password field";
const lengthError = ((min: number, max: number) => `must be between ${min} and ${max} characters`);

const usernameInput = body("username")
	.trim()
	.isAlpha()
	.withMessage(alphaError)
	.isLength({ min: MIN, max: MAX })
	.withMessage(lengthError(MIN, MAX))

const emailInput = body("email")
	.trim()
	.isEmail()
	.withMessage('Please use a valid email')

const passwordInput = body("password")
	.trim()
	.isLength({ min: 6, max: 20 })
	.withMessage(`Password: ${lengthError(6, 20)}`)
	.matches(/\d/)
	.withMessage("Password must contain at least one number")
	.matches(/[!@#$%^&*]/)
	.withMessage("Password must contain at least one special character")

const confirmPasswordInput = body("confirmPassword")
	.trim()
	.custom((value, { req }) => {
		if (value !== req.body.password) {
			throw new Error(`confirm field: ${confirmPWError}`)
		}
		return true
	}).withMessage(confirmPWError)

export const registerValidation =
	[usernameInput,
		emailInput,
		passwordInput,
		confirmPasswordInput,
	];


export const loginValidation = [usernameInput]

export const handleValidationErrors = () => {
	return (req: Request, res: Response, next: NextFunction): any => {

		const result: Result = validationResult(req);

		if (!result.isEmpty()) {
			const errors: string[] = result.array();
			flash.set(req, "error", errors)
			console.log(req.session.flash)
			const responseData = { ...req.session.flash }
			flash.reset(req)
			return res.status(400).json({ flash: responseData })
		}
		next();
	}

}  
