import { OrganizationSelector } from "@/components/OrganizationSelector"
import { Project } from "@/components/Project"
import { fetchOrganizations, fetchProjects } from "@/services/database"
import { Group, SimpleGrid, Space, Title } from "@mantine/core"
import { Organization, Project as ProjectType } from "@prisma/client"
import Head from "next/head"
import { useState } from "react"

type Props = Awaited<ReturnType<typeof getServerSideProps>>["props"]

export async function getServerSideProps() {
  const projects = await fetchProjects()
  const organizations = await fetchOrganizations()

  return {
    props: {
      projects,
      organizations,
    },
  }
}

const renderProjects = (projects: ProjectType[]) =>
  projects.map((project: any) => (
    <Project
      key={project.id}
      title={project.title}
      createdAt={project.createdAt}
      organization={project.company.organization}
    />
  ))

const renderSelectorData = (organizations: Organization[]) =>
  organizations.map((organization: Organization) => ({
    value: organization.id,
    label: organization.name,
  }))

const filterOrganizations = (projects: ProjectType[], filters: string[]) =>
  !filters.length
    ? projects
    : projects.filter((project: any) => filters.includes(project.company.organization.id))

export default function Page({ projects, organizations }: Props) {
  const [filters, updateFilters] = useState([])
  const filterByOrganization = filterOrganizations(projects, filters)
  const selectorData = renderSelectorData(organizations)

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>

      <Group>
        <Title mb="lg" order={3}>
          Projects
        </Title>
      </Group>

      <Space h="md" />
      <OrganizationSelector data={selectorData} onChange={updateFilters} value={filters} />
      <Space h="md" />

      <SimpleGrid cols={3}>{renderProjects(filterByOrganization)}</SimpleGrid>
    </>
  )
}
