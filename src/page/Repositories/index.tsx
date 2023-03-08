import { Link } from 'react-router-dom'
import { RepositoryItem } from '../../components/RepositoriesItem'
import { ContainerRepo } from './styles'

export function Repositories() {
  return (
    <ContainerRepo>
      <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
        Voltar
      </Link>
      <RepositoryItem
        name="allCopier"
        description="teste"
        htmlurl="https://github.com/Jones-bass/allCopier"
      />
    </ContainerRepo>
  )
}
