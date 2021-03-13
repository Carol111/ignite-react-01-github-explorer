import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'Github Explorer',
  description: 'Repositório do primeiro módulo do Ignite',
  link: 'https://github.com/Carol111/ignite-react-01-github-explorer'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  )
}