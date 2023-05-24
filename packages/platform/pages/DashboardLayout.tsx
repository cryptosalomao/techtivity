import {
  AppShell,
  Group,
  MantineProvider,
  Navbar,
  Text,
  ThemeIcon,
  Title,
  UnstyledButton,
} from "@mantine/core"
import { Notifications } from "@mantine/notifications"
import { IconBuildingCommunity, IconRocket } from "@tabler/icons-react"
import Link, { LinkProps } from "next/link"
import React from "react"
import { RouterTransition } from "./RouterTransition"

export function DashboardLayout({ children }: any) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell
        navbar={
          <Navbar width={{ base: 250 }}>
            <Title order={3} p="md" color="blue" weight={400}>
              Techtivity
            </Title>
            <Navbar.Section grow mt="xs">
              <NavLink href="/projects" label="Projects" icon={IconRocket} />
              <NavLink href="/organizations" label="Organizations" icon={IconBuildingCommunity} />
            </Navbar.Section>
          </Navbar>
        }
      >
        {children}
      </AppShell>

      <RouterTransition />
      <Notifications position="top-right" />
    </MantineProvider>
  )
}

function NavLink({ icon, href, label }: { icon: any; href: LinkProps["href"]; label: string }) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <UnstyledButton
        sx={(theme) => ({
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
          "&:hover": {
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
          },
        })}
      >
        <Group>
          <ThemeIcon color="gray" variant="light">
            {React.createElement(icon, { size: 16 })}
          </ThemeIcon>

          <Text size="sm">{label}</Text>
        </Group>
      </UnstyledButton>
    </Link>
  )
}
