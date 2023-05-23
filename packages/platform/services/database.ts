import { prisma } from "@growinco/service"

export const fetchProjects = async () => {
  const projects = await prisma.project.findMany({
    include: {
      company: {
        include: {
          organization: true,
        },
      },
    },
  })

  return projects
}

export const fetchOrganizations = async () => {
  const organizations = await prisma.organization.findMany({
    include: {
      companies: {
        include: {
          organization: true,
          projects: {
            include: {
              company: true,
            },
          },
        },
      },
    },
  })

  const organizationsWithRegions = []

  for (const organization of organizations) {
    const regions: any = []

    for (const company of organization.companies) {
      const countryIds = company.countryIds || []

      for (const countryId of countryIds) {
        const country = await prisma.country.findUnique({
          where: { id: countryId },
          include: { globalRegion: true },
        })

        if (country) {
          const region = country.globalRegion.name

          const existingRegion = regions.find((r: any) => r.name === region)

          if (existingRegion) {
            existingRegion.countries.push(country.name)
          } else {
            regions.push({
              name: region,
              countries: [country.name],
            })
          }
        }
      }
    }

    organizationsWithRegions.push({
      ...organization,
      regions,
    })
  }

  return organizationsWithRegions
}
