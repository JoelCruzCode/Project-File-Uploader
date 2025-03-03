import { NavLink } from "react-router";
import classes from "./Header.module.css"
import { APP_ROUTES, Route } from "../../Routes";


export const Header = ({ hrefs = APP_ROUTES }: { hrefs?: Record<string, Route> }) => {
	return (
		<header className={classes.headerDiv}>
			<h1>File Uploader</h1>
			<nav className={classes.navBar}>
				{Object.entries(hrefs).map(([__, value]) => (
					<NavLink to={value.path} key={value.id}> {value.title} </NavLink>
				))}


			</nav>


		</header>)
}




