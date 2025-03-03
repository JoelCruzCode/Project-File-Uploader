// allows css classes to accessed through "classes" object
declare module "*.module.css" {
	const classes: { [key: string]: string };
	export default classes;
}

