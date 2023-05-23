import { Stack, Text, Title } from "@mantine/core"

type Region = {
  name: string
  countries: string[]
}

type Props = {
  regions: Region[]
}

const renderCountriesByRegion = (id: number, region: Region) => (
  <Stack key={`${region.name}-${id}`}>
    <Title order={6}>{region.name}</Title>
    <Text>{region.countries.join("; ")}</Text>
  </Stack>
)

export function Reach({ regions }: Props) {
  return <Stack>{regions.map((region: Region, id) => renderCountriesByRegion(id, region))}</Stack>
}
