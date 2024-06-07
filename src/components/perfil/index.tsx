import { useCallback, useEffect, useState } from 'react'
import { BsGithub, BsBoxArrowUpRight } from 'react-icons/bs'
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
  following?: number
  description?: string
  name?: string
  variant?: string
  imgUrl?: string
  onClick?: () => void
}

export function Perfil({
  name,
  following,
  followers,
  onClick,
  variant = 'primary',
}: PerfilProps) {
  const [userInfo, setUserInfo] = useState<PerfilProps>()

  const fetchUsers = useCallback(async () => {
    const response = await api.get('users/jones-bass')
    const {
      name,
      followers,
      following,
      avatar_url: avatarUrl,
      bio,
    } = response.data
    const newObjectUsers = {
      name,
      following,
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
          <div className="link">
            <h1>{userInfo?.name}</h1>
            <Link
              to="https://github.com/Jones-bass"
              style={{ color: '#3294F8' }}
              target="_blank"
            >
              VER NO GITHUB {'\u00A0'}
              <BsBoxArrowUpRight size={12} />
            </Link>
          </div>

          <p>{userInfo?.description}</p>
          <IconContainer>
            {onClick ? (
              <IconContent onClick={onClick}>
                <BsGithub />
                {userInfo?.name}
              </IconContent>
            ) : (
              <IconContent>
                <Link to="/repositories">
                  <FaArchive />
                  Repositories
                </Link>
              </IconContent>
            )}

            <IconContent>
              <FaUserFriends />
              {userInfo?.following} Seguidores
            </IconContent>
            <IconContent>
              <FaUserFriends />
              {userInfo?.followers} Seguintes
            </IconContent>
          </IconContainer>
        </ContainerText>
      </Container>
    </Main>
  )
}
