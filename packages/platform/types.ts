import { Company, Organization, Project } from "@prisma/client"

export type Region = {
  name: string
  countries: string[]
}

export type MappedOrganization = Organization & {
  companies: Company &
    {
      organization: Organization
      projects: Project[]
    }[]
  regions: Region[]
}
