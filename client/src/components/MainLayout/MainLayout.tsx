import { useState, ReactElement } from "react";
import { Header } from "../Header/Header";
import { Outlet } from "react-router";
import classes from "./MainLayout.module.css"

//interface MainProps {
//	children: ReactElement
//}
const currentYear = new Date().getFullYear();

const MainLayout = () => {
	return <main className={classes.main}>
		<Header></Header>
		<Outlet />
		<footer>

			<p className="footer-text">  &copy; {currentYear} File-Uploader			</p>		</footer>
	</main>
}


export default MainLayout
