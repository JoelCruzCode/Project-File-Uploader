
export interface FolderData {
	title: string;
	userId: number;
	files?: FileData[];
	user?: UserData;
}

export interface UserData {
	username: string;
	email: string;
	passwordHash: string;
	files?: FileData[];
	folders?: FolderData[];
}

export interface FileData {
	title: string;
	size: number;
	userId: number;
	folderId: number;
	folder: number;
	user?: UserData;
}

