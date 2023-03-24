import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loading } from '../../components/Loading'
import { Perfil } from '../../components/perfil'
import { RepositoryItem } from '../../components/RepositoriesItem'
import { FetchContext } from '../../contexts/FetchContext'
import { ContainerRepo } from './styles'

export function Repositories() {
  const { dados, loading, loadDados } = useContext(FetchContext)

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/')
  }

  useEffect(() => {
    loadDados('/users/jones-bass/repos')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <Perfil onClick={handleLogin} variant="secundary" />
      <ContainerRepo>
        {dados.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          )
        })}
      </ContainerRepo>
    </>
  )
}
