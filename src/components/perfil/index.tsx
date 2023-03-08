import { BsGithub } from 'react-icons/bs'

import { IconList } from '../../components/IconList'
import { Link } from 'react-router-dom'

import { Container, ContainerImg, ContainerText, Icon } from './styles'

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
          <Link style={{ textDecoration: 'none' }} to="/posts">
            <IconList Icon={<BsGithub size={16} />} titleIcon="Posts" />
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/repositories">
            <IconList Icon={<BsGithub size={16} />} titleIcon="Reposities" />
          </Link>
          <IconList Icon={<BsGithub size={16} />} titleIcon="32 seguidores" />
        </Icon>
      </ContainerText>
    </Container>
  )
}
