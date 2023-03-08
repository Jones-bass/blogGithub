import { Link } from 'react-router-dom'
import { ContainerList } from './styles'

interface RepositoryItemPropos {
  name: string
  description: string
  htmlurl: string
}

export function RepositoryItem({
  name,
  description,
  htmlurl,
}: RepositoryItemPropos) {
  return (
    <ContainerList>
      <strong>{name}</strong>
      <p>{description}</p>

      <Link
        style={{ textDecoration: 'none', color: 'white' }}
        to={htmlurl}
        target="_blank"
      >
        Acessar Repositorio
      </Link>
    </ContainerList>
  )
}
