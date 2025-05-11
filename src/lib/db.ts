import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

// This ensures Prisma client is only instantiated once
export const db = global.prisma || new PrismaClient();

// If we're in development, assign it to global for hot-reloading in Next.js
if (process.env.NODE_ENV !== 'production') global.prisma = db;
