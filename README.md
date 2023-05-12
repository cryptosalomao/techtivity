## Code structure

The repository is a monorepo containing npm workspaces under `packages/`.

#### packages/platform

A simple NextJS app.

#### packages/service

In the context of this activity, this is a simple database layer.

It includes a connection (`packages/service/.env`) to a MongoDB Atlas free serverless instance with some seeded data.

## Set up

Clone the repo, install NodeJS, and:

- `npm i`
- `(cd packages/service && npm run build)`
- `cd packages/platform && npm run dev`
- http://localhost:8000

## Activity

Your goal is to complete the four tasks below.

- Clone (please don't fork) this repository
- Create a PR containing the solution for the tasks below
- Invite `@rafagrowinco` as a collaborator

### Guidelines

- No need to write tests.
- Focus on code quality & maintainability.
- UI won't be evaluated. We use https://mantine.dev/.

### Task 1

Redirect the root page to `/projects`.

### Task 2

Implement the projects listing page.

It's currently broken with the error:

<img width="978" alt="localhost_8000_projects" src="https://github.com/GrowinCo/techtivity/assets/126191515/9c242066-cba4-4a52-8613-76af08f32b4b">

List all organizations (name, website, createdAt) and their projects (title, createdAt).

### Task 3

Display the organization's reach: a list of regions and countries where the organization has a presence.

Something like the below:

```jsx
<Title order={3}>Org 1</Title>
<Text weight="bold">Reach</Text>
<Stack>
  <Text>North America: United States</Text>
  <Text>Latin America: Brazil, Argentina</Text>
</Stack>
```

### Task 4

Implement a filter by organizations. Use Mantine's multiselect field.
