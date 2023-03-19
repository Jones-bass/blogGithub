import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { BoxCard, ContainerList } from './styles'

export interface RepositoryItemPropos {
  name: string
  language: string
  html_url: string
  created_at: string
}

interface RepositoryProps {
  repository: RepositoryItemPropos
}

export function RepositoryItem({ repository }: RepositoryProps) {
  const formattedDate = format(new Date(repository.created_at), 'MMMM yyyy', {
    weekStartsOn: 1,
    firstWeekContainsDate: 4,
    locale: ptBR,
  })

  return (
    <ContainerList to={repository.html_url} target="_blank">
      <BoxCard>
        <h1>{repository.name}</h1>

        <div>
          <p>{repository.language}</p>
          <span>{formattedDate}</span>
        </div>
      </BoxCard>
    </ContainerList>
  )
}
