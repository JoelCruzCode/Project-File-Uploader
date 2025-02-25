
import classes from "./Register.module.css"
import { Link } from "react-router"

const RegisterForm = () => {


	return (<div className={classes.formContainer}>
		<form className={classes.registerForm} method="post" name="login-form">
			<h2 className={classes.formTitle}>Create an Account</h2>
			<div className={classes.inputGroup}>
				<label className={classes.label} htmlFor="username">Username:</label>
				<input className={classes.input} type="text" name="username" required autoComplete="username" />
			</div>
			<div className={classes.inputGroup}>
				<label className={classes.label} htmlFor="email">Email:</label>
				<input className={classes.input} type="email" name="email" required autoComplete="email" />
			</div>
			<div className={classes.inputGroup}>
				<label className={classes.label} htmlFor="password"> Password:</label>
				<input className={classes.input} type="password" name="password" required autoComplete="new-password" />

			</div>
			<div className={classes.inputGroup}>
				<label className={classes.label} htmlFor="confirmPassword">Confirm Password:</label>
				<input className={classes.input} type="password" name="confirmPassword" required />
			</div>
			<div className={classes.btnGroup}>
				<button className={classes.loginBtn}>Sign up</button>
			</div>
		</form>
		<p> Already have an account?  &nbsp; <Link to="/login">Log in here</Link></p>
	</div>)

}



export default RegisterForm
