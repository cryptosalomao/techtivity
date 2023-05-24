import { Badge, rem } from "@mantine/core"
import { IconCalendarTime } from "@tabler/icons-react"

type Props = {
  createdAt: Date | string
}

export default function CreationDateBadge({ createdAt }: Props) {
  const parseDateTime = new Date(createdAt).toLocaleString()

  return (
    <Badge
      color="indigo"
      size="lg"
      radius="sm"
      variant="outline"
      leftSection={<IconCalendarTime size={rem(16)} strokeWidth={1.5} />}
    >
      {parseDateTime}
    </Badge>
  )
}
