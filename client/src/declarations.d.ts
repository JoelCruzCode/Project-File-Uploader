
declare module "*.module.css" {
	export const classes: { [key: string]: string };
	//export default classes;
}


export interface Flash {
	type: string;
	value: string;
	msg: string;
	path: string;
	location: string;
}



