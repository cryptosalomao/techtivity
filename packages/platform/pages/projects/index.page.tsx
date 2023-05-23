import { Project } from "@/components/Project"
import { fetchProjects } from "@/services/database"
import { Group, SimpleGrid, Space, Title } from "@mantine/core"
import Head from "next/head"

type Props = Awaited<ReturnType<typeof getServerSideProps>>["props"]

export async function getServerSideProps() {
  const projects = await fetchProjects()

  return {
    props: {
      projects,
    },
  }
}

const renderProjects = (projects: Props["projects"]) =>
  projects.map((project: any) => (
    <Project
      key={project.id}
      title={project.title}
      createdAt={project.createdAt}
      organization={project.company.organization}
    />
  ))

export default function Page({ projects }: Props) {
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

      <SimpleGrid cols={3}>{renderProjects(projects)}</SimpleGrid>
    </>
  )
}
