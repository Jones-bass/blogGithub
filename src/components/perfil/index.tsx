import { useCallback, useEffect, useState } from 'react'
import { BsGithub, BsArrowLeftShort, BsBoxArrowUpRight } from 'react-icons/bs'
import { FaUserFriends, FaArchive } from 'react-icons/fa'

import { Link } from 'react-router-dom'
import { api } from '../../service/api'
import {
  Main,
  Container,
  ContainerText,
  IconContainer,
  IconContent,
} from './styles'

interface PerfilProps {
  followers?: number
  description?: string
  name?: string
  variant?: string
  imgUrl?: string
  onClick?: () => void
}

export function Perfil({ name, onClick, variant = 'primary' }: PerfilProps) {
  const [userInfo, setUserInfo] = useState<PerfilProps>()

  const fetchUsers = useCallback(async () => {
    const response = await api.get('users/jones-bass')
    const { name, followers, avatar_url: avatarUrl, bio } = response.data
    const newObjectUsers = {
      name,
      followers,
      imgUrl: avatarUrl,
      description: bio,
    }
    setUserInfo(newObjectUsers)
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    <Main>
      <Container variant={variant}>
        <img src={userInfo?.imgUrl} alt="alt" />
        <ContainerText>
          <div className="div">
            {onClick && (
              <span onClick={onClick}>
                <BsArrowLeftShort size={20} />
                VOLTAR
              </span>
            )}
            {onClick && (
              <Link to="https://github.com/Jones-bass" target="_blank">
                VER NO GITHUB {'\u00A0'}
                <BsBoxArrowUpRight size={12} />
              </Link>
            )}
          </div>
          <h1>{userInfo?.name}</h1>
          <p>{userInfo?.description}</p>
          <IconContainer>
            <IconContent>
              <BsGithub />
              {userInfo?.name}
            </IconContent>

            <IconContent>
              <Link to="/repositories">
                <FaArchive />
                Repositories
              </Link>
            </IconContent>

            <IconContent>
              <FaUserFriends />
              {userInfo?.followers} Seguidores
            </IconContent>
          </IconContainer>
        </ContainerText>
      </Container>
    </Main>
  )
}
