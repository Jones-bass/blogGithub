import { Container, ContainerImg, ContainerText, Icon } from './styles'
import { BsGithub } from 'react-icons/bs'

import { IconList } from '../../components/IconList'

interface PerfilProps {
  image: string
  name: string
  bio: string
}
export function Perfil({ image, name, bio }: PerfilProps) {
  return (
    <Container>
      <ContainerImg>
        <img src={image} alt="" />
      </ContainerImg>
      <ContainerText>
        <h1>{name}</h1>
        <p>{bio}</p>
        <Icon>
          <IconList Icon={<BsGithub size={16} />} titleIcon="cameronwll" />
          <IconList Icon={<BsGithub size={16} />} titleIcon="Rocketseat" />
          <IconList Icon={<BsGithub size={16} />} titleIcon="32 seguidores" />
        </Icon>
      </ContainerText>
    </Container>
  )
}
