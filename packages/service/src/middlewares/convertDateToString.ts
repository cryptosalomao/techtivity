import { Prisma } from "@prisma/client"

const ACTIONS_TO_APPLY_MIDDLEWARE = ["findFirst", "findMany", "findRaw", "findUnique"]

const convertDateToString = async (
  params: Prisma.MiddlewareParams,
  next: (params: Prisma.MiddlewareParams) => Promise<any>
) => {
  const result = await next(params)

  if (ACTIONS_TO_APPLY_MIDDLEWARE.includes(params.action)) {
    const normalizeDataTypes = JSON.parse(JSON.stringify(result))

    return normalizeDataTypes
  }

  return result
}

export default convertDateToString
