import { Folder, Prisma } from "@prisma/client"
import { prisma } from "../config/client.ts";
import { handleError } from "./userModel.ts";
import { FolderData, UserData } from "../types/index.js";


async function createFolder(data: FolderData): Promise<Folder> {

	try {
		return await prisma.folder.create({
			data: {
				title: data.title,
				userId: data.userId
			}
		})

	} catch (error) {
		handleError("create", error);
	}
}


async function getFolder(id: number): Promise<Prisma.FolderGetPayload<{ include: { files: true } }> | null> {

	try {
		return await prisma.folder.findUnique({
			where: { id },
			include: { files: true }
		})

	} catch (error) {
		handleError("retrieve", error)
	}
}



async function updateFolder(id: number, data: FolderData): Promise<Folder> {
	try {
		return await prisma.folder.update({
			where: { id: id },
			data: {
				title: data.title,
				files: data.files ? {
					update: data.files.map(file => ({
						where: { id: file.folderId },
						data: { title: file.title }
					}
					))
				} : undefined
			}
		})
	} catch (error) {
		handleError("update", error);
	}
}



async function deleteFolder(data: Prisma.FolderWhereUniqueInput): Promise<Folder> {
	try {
		return await prisma.folder.delete({
			where: { id: data.id }
		})
	} catch (error) {
		handleError("delete", error);
	}
}

