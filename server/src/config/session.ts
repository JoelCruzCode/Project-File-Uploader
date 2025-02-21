import expressSession from 'express-session';
import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import { prisma } from "./client.ts"


const prismaSession = expressSession({
	cookie: {
		maxAge: 7 * 24 * 60 * 60 * 1000 // ms
	},
	secret: 'a santa at nasa',
	resave: true,
	saveUninitialized: true,
	store: new PrismaSessionStore(
		prisma,
		{
			checkPeriod: 2 * 60 * 1000,  //ms
			dbRecordIdIsSessionId: true,
			dbRecordIdFunction: undefined,
		}
	)
});







export default prismaSession


