import { Link } from 'react-router-dom'
import { ContainerList } from './styles'

export interface RepositoryItemPropos {
  name: string
  description: string
  html_url: string
}

interface RepositoryProps {
  repository: RepositoryItemPropos
}

export function RepositoryItem({ repository }: RepositoryProps) {
  return (
    <ContainerList>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <button>
        <Link to={repository.html_url} target="_blank">
          Acessar Repositorio
        </Link>
      </button>
    </ContainerList>
  )
}
