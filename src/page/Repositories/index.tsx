import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loading } from '../../components/Loading'
import { Perfil } from '../../components/perfil'
import {
  RepositoryItem,
  RepositoryItemPropos,
} from '../../components/RepositoriesItem'
import { api } from '../../service/api'
import { ContainerRepo } from './styles'

export function Repositories() {
  const [loading, setLoading] = useState(true)

  const [dados, setDados] = useState<RepositoryItemPropos[]>([])

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/')
  }

  useEffect(() => {
    async function loadDados() {
      setLoading(true)
      try {
        const response = await api.get('/users/jones-bass/repos')

        const data = await response.data

        setDados(data)
      } catch (error) {
        alert('Erro ao exibir slider de produtos, tente novamente mais tarde.')

        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    loadDados()
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
