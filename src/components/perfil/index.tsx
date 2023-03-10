import { BsGithub, BsArrowLeftShort, BsBoxArrowUpRight } from 'react-icons/bs'

import { IconList } from '../../components/IconList'
import { Link } from 'react-router-dom'
import { Container, ContainerText, Icon } from './styles'

interface PerfilProps {
  image?: string
  name: string
  bio?: string
  onClick?: () => void
}

export function Perfil({ image, name, bio, onClick }: PerfilProps) {
  return (
    <Container>
      {image && <img src={image} alt={name} />}
      <ContainerText>
        <div className="div">
          {onClick && (
            <span onClick={onClick}>
              <BsArrowLeftShort size={20} />
              VOLTAR
            </span>
          )}
          {onClick && (
            <Link
              to="https://github.com/Jones-bass"
              target="_blank"
              style={{
                color: '#3294F8',
                textDecoration: 'none',
                fontSize: '14px',
              }}
            >
              GITHUB {'\u00A0'}
              <BsBoxArrowUpRight size={12} />
            </Link>
          )}
        </div>
        <h1>{name}</h1>
        <p>{bio}</p>
        <Icon>
          <Link style={{ textDecoration: 'none' }} to="/posts">
            <IconList Icon={<BsGithub />} titleIcon="Posts" />
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/repositories">
            <IconList Icon={<BsGithub />} titleIcon="Reposities" />
          </Link>
          <IconList Icon={<BsGithub />} titleIcon="32 seguidores" />
        </Icon>
      </ContainerText>
    </Container>
  )
}
