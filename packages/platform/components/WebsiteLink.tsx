import { Button, rem } from "@mantine/core"
import { IconWorldWww } from "@tabler/icons-react"

type Props = {
  website: string | null
}

export default function WebsiteLink({ website }: Props) {
  if (!website) return <></>

  return (
    <Button
      component="a"
      target="_blank"
      href={website || "#"}
      leftIcon={<IconWorldWww size={rem(16)} strokeWidth={1.5} />}
      compact
      variant="gradient"
      uppercase
    >
      {website}
    </Button>
  )
}
