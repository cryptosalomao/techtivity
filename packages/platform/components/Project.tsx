import { Card, Flex, Group, Stack, Text, Title } from "@mantine/core"
import { Organization } from "@prisma/client"
import WebsiteLink from "./WebsiteLink"

type Props = {
  title: string
  createdAt: Date
  organization: Organization
}

export function Project({ title, createdAt, organization }: Props) {
  const convertDate = (date: Date) => new Date(date).toLocaleString()

  return (
    <Card withBorder shadow="sm" radius="md">
      <Card.Section withBorder p="md">
        <Stack>
          <Title order={4}>{title}</Title>
          <Text>{convertDate(createdAt)}</Text>
        </Stack>
      </Card.Section>
      <Card.Section p="md">
        <Group>
          <Flex align="center" gap="md">
            <Title order={5}>{organization.name}</Title>
            <WebsiteLink website={organization.website} />
          </Flex>
          <Text>{convertDate(organization.createdAt)}</Text>
        </Group>
      </Card.Section>
    </Card>
  )
}
