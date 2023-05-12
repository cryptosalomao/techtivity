import { PrismaClient } from "@prisma/client"

const globalForPrisma = global as unknown as {
  prismaInstance?: ReturnType<typeof prismaInstance>
}

function prismaInstance() {
  const globalPrisma = new PrismaClient({
    log: ["query"],
  })

  return globalPrisma
}

export const prisma = globalForPrisma.prismaInstance || prismaInstance()

if (process.env.NODE_ENV !== "production") globalForPrisma.prismaInstance = prisma
