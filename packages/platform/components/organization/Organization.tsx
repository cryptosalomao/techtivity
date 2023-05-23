import { Card, Flex, Stack, Tabs, Title, rem } from "@mantine/core"
import { Organization, Project } from "@prisma/client"
import { IconFiles, IconMapPins } from "@tabler/icons-react"
import CreationDateBadge from "../CreationDateBadge"
import WebsiteLink from "../WebsiteLink"
import Projects from "./Projects"

type MappedOrganizationProjects = Organization & {
  companies: {
    projects: Project[]
  }[]
}

type Props = {
  organization: MappedOrganizationProjects
}

const flattenProjects = (organization: MappedOrganizationProjects) => ({
  ...organization,
  projects: organization.companies.flatMap((company) => company.projects),
})

export function Organization({ organization }: Props) {
  const flattenedProjects = flattenProjects(organization)

  return (
    <Card withBorder shadow="sm" radius="md">
      <Card.Section withBorder p="md">
        <Stack>
          <Flex align="center" gap="md">
            <Title order={4}>{organization.name}</Title>
            <WebsiteLink website={organization.website} />
          </Flex>
          <CreationDateBadge createdAt={organization.createdAt} />
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
            <Projects projects={flattenedProjects.projects} />
          </Tabs.Panel>
        </Tabs>
      </Card.Section>
    </Card>
  )
}