import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Perfil } from '../../components/perfil'
import {
  RepositoryItem,
  RepositoryItemPropos,
} from '../../components/RepositoriesItem'
import { ContainerRepo } from './styles'

export function Repositories() {
  const [repositories, setRepositories] = useState<RepositoryItemPropos[]>([])

  const navigate = useNavigate()

  function handleLogin() {
    // Lógica de autenticação do usuário
    navigate('/')
  }

  useEffect(() => {
    fetch('http://api.github.com/users/jones-bass/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data))
  }, [])

  return (
    <>
      <Perfil name="Meus Repositórios" onClick={handleLogin} />
      <ContainerRepo>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          )
        })}
      </ContainerRepo>
    </>
  )
}
