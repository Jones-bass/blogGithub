import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { api } from '../../service/api'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { Perfil } from '../../components/perfil'
import { Container } from './styles'

interface PostDetail {
  title: string
  createdAt: string
  body: string
}

export function Posts() {
  const [post, setPost] = useState<PostDetail>({} as PostDetail)
  const navigate = useNavigate()

  const { id } = useParams()

  const handleLogin = () => {
    navigate('/')
  }

  const fetchPost = useCallback(async () => {
    const response = await api.get(`/repos/jones-bass/bloggithub/issues/${id}`)
    const { title, created_at: createdAt, body } = response.data
    const newPostObject = {
      title,

      createdAt: formatDistanceToNow(new Date(createdAt), {
        locale: ptBR,
        addSuffix: true,
      }),

      body,
    }
    setPost(newPostObject)
  }, [id])

  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  return (
    <div>
      <Perfil onClick={handleLogin} variant="secundary" />
      <Container>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
      </Container>
    </div>
  )
}
