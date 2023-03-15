import { Perfil } from '../../components/perfil'
import { SearchForm } from '../../components/SearchForm'
import { useAuth } from '../../hooks/useAuth'

import { ContainerMain, ContainerPost, CardPost, CardText } from './styles'

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
        {githubContent.map((item) => {
          return (
            <CardPost key={item.id}>
              <CardText>
                <h1>{item.title}</h1>
                <span>{item.date}</span>
              </CardText>
              <p>{item.description}</p>
            </CardPost>
          )
        })}
      </ContainerPost>
    </ContainerMain>
  )
}
