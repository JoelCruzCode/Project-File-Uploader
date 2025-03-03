export interface Message {
	type: string;
	value: string;
	msg: string;
	path: string;
	location: string;
}


export interface Flash {
	event: boolean;
	type: string;
	message: Message[]
}

