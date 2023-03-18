import { Card } from '../../components/Card'
import { Perfil } from '../../components/perfil'
import { SearchForm } from '../../components/SearchForm'
import { useAuth } from '../../hooks/useAuth'

import { ContainerMain, ContainerPost } from './styles'

export function Home() {
  const { githubContent } = useAuth()

  return (
    <ContainerMain>
      <Perfil />
      <SearchForm />
      <ContainerPost>
        {githubContent &&
          githubContent.map((item) => (
            <Card key={`${item.title}-${item.number}`} item={item} />
          ))}
      </ContainerPost>
    </ContainerMain>
  )
}
