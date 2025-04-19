import { PrismaClient } from "@prisma/client";

let db;

if (!globalThis._prisma) {
    globalThis._prisma = new PrismaClient();
}

db = globalThis._prisma;

export { db };
