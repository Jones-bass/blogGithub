import { useNavigate } from 'react-router-dom'
import { Perfil } from '../../components/perfil'
import { RepositoryItem } from '../../components/RepositoriesItem'
import { ContainerRepo } from './styles'

export function Repositories() {
  const navigate = useNavigate()

  function handleLogin() {
    // Lógica de autenticação do usuário
    navigate('/')
  }

  return (
    <>
      <Perfil name="Meus Repositórios" onClick={handleLogin} />
      <ContainerRepo>
        <RepositoryItem
          name="allCopier"
          description="teste"
          htmlurl="https://github.com/Jones-bass/allCopier"
        />
        <RepositoryItem
          name="allCopier"
          description="teste"
          htmlurl="https://github.com/Jones-bass/allCopier"
        />
        <RepositoryItem
          name="allCopier"
          description="teste"
          htmlurl="https://github.com/Jones-bass/allCopier"
        />
        <RepositoryItem
          name="allCopier"
          description="teste"
          htmlurl="https://github.com/Jones-bass/allCopier"
        />
      </ContainerRepo>
    </>
  )
}
