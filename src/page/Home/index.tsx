import { Perfil } from '../../components/perfil'
import { SearchForm } from '../../components/SearchForm'

import { ContainerMain } from './styles'

export function Home() {
  return (
    <ContainerMain>
      <Perfil
        image="https://avatars.githubusercontent.com/u/85463497?v=4"
        name="Jones-Bass"
        bio="Focado em meus objetivos, sou paciente, espero a melhor oportunidade para tomada de decisão, persisto nos meus sonhos, gosto de trabalhar em equipe."
      />
      <SearchForm />
    </ContainerMain>
  )
}
