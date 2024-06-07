import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { formatText } from '../../utils/formatText'
import { PostCardProps } from '../../contexts/FetchContext'
import { CardPost, CardText } from './styles'

interface IPostCard {
  item: PostCardProps
}

export function Card({ item }: IPostCard) {
  const { created_at: createdAt, body, title, number } = item
  const formattedDate = formatDistanceToNow(new Date(createdAt), {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <CardPost to={`/${number}`}>
      <CardText>
        <h1>{title}</h1>
        <span>{formattedDate}</span>
      </CardText>
      <p>{formatText(body, 80)}</p>
    </CardPost>
  )
}
