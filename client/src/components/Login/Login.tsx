import { Link } from "react-router";
import classes from "./Login.module.css"



const LoginForm = () => {

	return (<div className={classes.formContainer}>
		<form className={classes.loginForm} action="post" name="login-form">
			<h2 className={classes.formTitle}>Login</h2>
			<div className={classes.inputGroup}>

				<label className={classes.label} htmlFor="username">Username:</label>
				<input className={classes.input} type="text" name="username" required autoComplete="username" />

			</div>
			<div className={classes.inputGroup}>

				<label className={classes.label} htmlFor="password"> Password:</label>
				<input className={classes.input} type="text" name="password" required autoComplete="current-password" />

			</div>
			<div className={classes.btnGroup}>
				<button className={classes.loginBtn}>Login</button>
				<button className={classes.guestBtn}> Guest</button>
			</div>



		</form>
		<p>Don't have an account? &nbsp; <Link to="/register">Sign up here</Link></p>
	</div>)
}

export default LoginForm


