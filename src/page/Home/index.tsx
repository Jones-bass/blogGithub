import { useContext } from 'react'
import { Card } from '../../components/Card'
import { Perfil } from '../../components/perfil'
import { SearchForm } from '../../components/SearchForm'
import { FetchContext } from '../../contexts/FetchContext'

import { ContainerMain, ContainerPost } from './styles'

export function Home() {
  const { githubContent } = useContext(FetchContext)

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
