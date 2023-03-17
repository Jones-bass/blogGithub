import { Card } from '../../components/Card'
import { Perfil } from '../../components/perfil'
import { SearchForm } from '../../components/SearchForm'
import { useAuth } from '../../hooks/useAuth'

import { ContainerMain, ContainerPost } from './styles'

export function Home() {
  const { githubContent } = useAuth()

  return (
    <ContainerMain>
      <Perfil
        image="https://avatars.githubusercontent.com/u/85463497?v=4"
        name="Jones-Bass"
        bio="Focado em meus objetivos, sou paciente, espero a melhor oportunidade para tomada de decisão, persisto nos meus sonhos, gosto de trabalhar em equipe."
      />
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
