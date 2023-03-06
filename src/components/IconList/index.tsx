import { ReactNode } from 'react'
import { ContentIcon } from './styles'

interface listOfQualitiesProps {
  titleIcon: string
  Icon: ReactNode
}

export function IconList({ titleIcon, Icon }: listOfQualitiesProps) {
  return (
    <ContentIcon>
      {Icon}
      {titleIcon}
    </ContentIcon>
  )
}
