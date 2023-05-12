import { prisma } from "@growinco/service"
import { Group, Space, Title } from "@mantine/core"
import Head from "next/head"

type Props = Awaited<ReturnType<typeof getServerSideProps>>["props"]

export async function getServerSideProps() {
  const projects = await prisma.project.findMany()

  return {
    props: {
      projects,
    },
  }
}

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

      {JSON.stringify(projects)}
    </>
  )
}
