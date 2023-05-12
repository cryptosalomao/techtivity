import { prisma } from "../src/prisma"

async function main() {
  const regions = await Promise.all([
    prisma.globalRegion.create({ data: { name: "North America" } }),
    prisma.globalRegion.create({ data: { name: "Latin America" } }),
  ])

  const countries = await Promise.all([
    prisma.country.create({ data: { name: "United States", globalRegionId: regions[0].id } }),
    prisma.country.create({ data: { name: "Brazil", globalRegionId: regions[1].id } }),
    prisma.country.create({ data: { name: "Argentina", globalRegionId: regions[1].id } }),
  ])

  const orgs = await Promise.all([
    prisma.organization.create({ data: { name: "Org 1", website: "https://org1.com/" } }),
    prisma.organization.create({ data: { name: "Org 2", website: "https://org2.com/" } }),
  ])

  const companies = await Promise.all([
    prisma.company.create({
      data: {
        name: "Org1 LATAM",
        organizationId: orgs[0].id,
        countryIds: [countries[1].id],
      },
    }),
    prisma.company.create({
      data: { name: "Org1 NA", organizationId: orgs[0].id, countryIds: [countries[0].id] },
    }),
    prisma.company.create({
      data: { name: "Org2 ", organizationId: orgs[1].id, countryIds: [countries[2].id] },
    }),
  ])

  const projects = await Promise.all([
    prisma.project.create({
      data: { title: "Project 1", companyId: companies[0].id },
    }),
    prisma.project.create({
      data: { title: "Project 2", companyId: companies[0].id },
    }),
    prisma.project.create({
      data: { title: "Project 3", companyId: companies[1].id },
    }),
    prisma.project.create({
      data: { title: "Project 4", companyId: companies[2].id },
    }),
  ])
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
