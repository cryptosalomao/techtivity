import { Organization } from "@/components/organization/Organization"
import { fetchOrganizations } from "@/services/database"
import { Group, SimpleGrid, Space, Title } from "@mantine/core"
import { Organization as OrganizationType, Project } from "@prisma/client"
import Head from "next/head"

type MappedOrganizationProjects = OrganizationType & {
  companies: {
    projects: Project[]
  }[]
}

type Props = Awaited<ReturnType<typeof getServerSideProps>>["props"]

export async function getServerSideProps() {
  const organizations = await fetchOrganizations()

  return {
    props: {
      organizations,
    },
  }
}

export default function Page({ organizations }: Props) {
  return (
    <>
      <Head>
        <title>Organizations</title>
      </Head>
      <Group>
        <Title mb="lg" order={3}>
          Organizations
        </Title>
      </Group>
      <Space h="md" />
      <SimpleGrid cols={3}>
        {organizations.map((organization: MappedOrganizationProjects) => (
          <Organization key={organization.id} organization={organization} />
        ))}
      </SimpleGrid>
    </>
  )
}
