import { Organization } from "@/components/Organization"
import { prisma } from "@growinco/service"
import { Group, SimpleGrid, Space, Title } from "@mantine/core"
import { Organization as OrganizationType } from "@prisma/client"
import Head from "next/head"

type Props = Awaited<ReturnType<typeof getServerSideProps>>["props"]

export async function getServerSideProps() {
  const organizations = await prisma.organization.findMany({
    include: {
      companies: {
        include: {
          projects: true,
        },
      },
    },
  })

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
        {organizations.map((organization: OrganizationType) => (
          <Organization key={organization.id} organization={organization} />
        ))}
      </SimpleGrid>
    </>
  )
}