import { Organization } from "@/components/organization/Organization"
import { fetchOrganizationsWithRegions } from "@/services/database"
import { Group, SimpleGrid, Space, Title } from "@mantine/core"
import Head from "next/head"

type Props = Awaited<ReturnType<typeof getServerSideProps>>["props"]

export async function getServerSideProps() {
  const organizations = await fetchOrganizationsWithRegions()

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
        {organizations.map((organization: any) => (
          <Organization key={organization.id} organization={organization} />
        ))}
      </SimpleGrid>
    </>
  )
}
