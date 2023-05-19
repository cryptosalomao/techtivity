import { Card, Flex, Stack, Tabs, Text, Title, rem } from "@mantine/core"
import { Organization } from "@prisma/client"
import { IconFiles, IconMapPins } from "@tabler/icons-react"
import WebsiteLink from "./WebsiteLink"

type Props = {
  organization: Organization
}

export function Organization({ organization }: Props) {
  const convertDate = (date: Date) => new Date(date).toLocaleString()

  return (
    <Card withBorder shadow="sm" radius="md">
      <Card.Section withBorder p="md">
        <Stack>
          <Flex align="center" gap="md">
            <Title order={4}>{organization.name}</Title>
            <WebsiteLink website={organization.website} />
          </Flex>
          <Text>{convertDate(organization.createdAt)}</Text>
        </Stack>
      </Card.Section>
      <Card.Section withBorder p="md">
        <Tabs defaultValue="reach">
          <Tabs.List>
            <Tabs.Tab icon={<IconMapPins size={rem(16)} />} value="reach">
              Reach
            </Tabs.Tab>
            <Tabs.Tab icon={<IconFiles size={rem(16)} />} value="projects">
              Projects
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="reach" pt="sm">
            Reach
          </Tabs.Panel>
          <Tabs.Panel value="projects" pt="sm">
            Projects
          </Tabs.Panel>
        </Tabs>
      </Card.Section>
    </Card>
  )
}
