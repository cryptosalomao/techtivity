import { MultiSelect } from "@mantine/core"

type Props = {
  data: { value: string; label: string }[]
  onChange: (value: []) => void
  value: string[]
}

export function OrganizationSelector({ data, onChange, value }: Props) {
  return (
    <MultiSelect
      data={data}
      label="Filter by Organization"
      placeholder="Select one or more organization(s)"
      onChange={onChange}
      value={value}
      clearable
    />
  )
}
