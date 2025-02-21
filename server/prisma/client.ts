import { PrismaClient } from '@prisma/client'
// created global to prevent multiple instances of prisma on the chance of hot reloading
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma =
	globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma  
