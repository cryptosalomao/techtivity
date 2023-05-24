import { Card, Flex, Group, Stack, Title } from "@mantine/core"
import { Organization } from "@prisma/client"
import CreationDateBadge from "./CreationDateBadge"
import WebsiteLink from "./WebsiteLink"

type Props = {
  title: string
  createdAt: Date
  organization: Organization
}

export function Project({ title, createdAt, organization }: Props) {
  return (
    <Card withBorder shadow="sm" radius="md">
      <Card.Section withBorder p="md">
        <Stack>
          <Title order={4}>{title}</Title>
          <CreationDateBadge createdAt={createdAt} />
        </Stack>
      </Card.Section>
      <Card.Section p="md">
        <Group>
          <Flex align="center" gap="md">
            <Title order={5}>{organization.name}</Title>
            <WebsiteLink website={organization.website} />
          </Flex>
          <CreationDateBadge createdAt={organization.createdAt} />
        </Group>
      </Card.Section>
    </Card>
  )
}
