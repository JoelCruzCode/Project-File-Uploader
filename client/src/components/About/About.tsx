import classes from "./About.module.css"

export default function About() {

	return (
		<div>
			<h1 className={classes.title}> Welcome to File Uploader</h1>
			<p className={classes.description}>
				Your secure, reliable, and easy-to-use online file storage solution. Start organizing and accessing your files from anywhere in the world.
			</p>
			<button className={classes.loginBtnLink}></button>
			<div className={classes.cardContainer}>

				<div className={classes.card}>
					<h3 className={classes.cardTitle}>Secure</h3>
					<p className={classes.cardDescription}>
						Robust encryption to keep your files safe and secure from unauthorized access.
					</p>
				</div>

				<div className={classes.card}>
					<h3 className={classes.cardTitle}>Ready Access</h3>
					<p className={classes.cardDescription}>
						Sync your files in the cloud, ensuring access to your latest version across any device.
					</p>
				</div>
				<div className={classes.card}>
					<h3 className={classes.cardTitle}>Easy-to-Use</h3>
					<p className={classes.cardDescription}>
						User-friendly interface that makes organizing and accessing your files a breeze.
					</p>
				</div>
			</div>
		</div>
	)
}



