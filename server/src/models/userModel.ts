
import { Prisma, Users } from "@prisma/client"
import { prisma } from "../config/client.ts";
import { FolderData, UserData, FileData } from "../types/index.js";
import bcrypt from "bcryptjs";

interface UserCredentials {
	username: string;
	email: string;
	password: string;
}

export async function createUser(data: UserCredentials): Promise<Users> {

	try {
		const passwordHash = await bcrypt.hash(data.password, 10)
		return await prisma.users.create({
			data: {
				username: data.username,
				email: data.email,
				passwordHash: passwordHash
			}
		})
	} catch (error: unknown) {
		handleError("create", error)
	}
}


export async function getUser(username: string): Promise<Prisma.UsersGetPayload<{ include: { files: true, folders: true } }> | null> {

	try {
		return await prisma.users.findUnique({
			where: { username },
			include: { files: true, folders: true }
		})
	} catch (error) {
		handleError("retrieve", error)
	}
}

export async function updateUser(id: number, data: UserData): Promise<Prisma.UsersUpdateInput> {

	try {
		return await prisma.users.update({
			where: { id: id },
			data: {
				username: data.username,
				email: data.email,
				passwordHash: data.passwordHash
			}
		})
	} catch (error) {
		handleError("update", error)
	}
}

export async function deleteUser(data: Prisma.UsersWhereUniqueInput): Promise<[Prisma.BatchPayload, Prisma.BatchPayload, UserData]> {
	// have to delete folders & files then await a transaction to delete a user
	try {

		const deleteFiles = prisma.file.deleteMany({ where: { userId: data.id } })
		const deleteFolders = prisma.folder.deleteMany({ where: { userId: data.id } })
		const deleteUser = prisma.users.delete({
			where: {
				id: data.id,
			}
		})

		return await prisma.$transaction([deleteFiles, deleteFolders, deleteUser])

	} catch (error) {
		handleError("delete", error)
	}
}

export function handleError(action: string, error: unknown): never {

	const errorMessage = error instanceof Error ? error.message : "Unknown Error"
	throw new Error(`Failed to ${action} user ${errorMessage}`)
}
