import { Table } from "@mantine/core"
import { Project } from "@prisma/client"
import CreationDateBadge from "../CreationDateBadge"

type Props = {
  projects: Project[]
}

const renderRows = (projects: Project[]) =>
  projects.map((project: Project) => (
    <tr key={project.id}>
      <td>{project.title}</td>
      <td>
        <CreationDateBadge createdAt={project.createdAt} />
      </td>
    </tr>
  ))

export default function Projects({ projects }: Props) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Creation Date</th>
        </tr>
      </thead>
      <tbody>{renderRows(projects)}</tbody>
    </Table>
  )
}
