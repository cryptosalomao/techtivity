import { PrismaClient } from "@prisma/client"
import convertDateToString from "./middlewares/convertDateToString"

const globalForPrisma = global as unknown as {
  prismaInstance?: ReturnType<typeof prismaInstance>
}

function prismaInstance() {
  const globalPrisma = new PrismaClient({
    log: ["query"],
  })

  globalPrisma.$use(convertDateToString)

  return globalPrisma
}

export const prisma = globalForPrisma.prismaInstance || prismaInstance()

if (process.env.NODE_ENV !== "production") globalForPrisma.prismaInstance = prisma
