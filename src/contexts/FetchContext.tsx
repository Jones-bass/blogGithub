import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { RepositoryItemPropos } from '../components/RepositoriesItem'
import { api } from '../service/api'

export interface PostCardProps {
  title: string
  body: string
  created_at: string
  number: string
}

export interface PostGit {
  title: string
  comments: number
  createdAt: string
  githubUsername: string
  url: string
  body: string
}

interface IFetchContext {
  githubContent: PostCardProps[]
  postsCountTotal: number
  dados: RepositoryItemPropos[]

  loading: boolean
  fetchGithub: (query: string) => Promise<void>
  loadDados: (rota: string) => Promise<void>
}

interface IFetchContextProviderProps {
  children: ReactNode
}

export const FetchContext = createContext({} as IFetchContext)

export const FetchContextProvider = ({
  children,
}: IFetchContextProviderProps) => {
  const [loading, setLoading] = useState(true)
  const [dados, setDados] = useState<RepositoryItemPropos[]>([])

  const [postsCountTotal, setPostsCountTotal] = useState(0)
  const [githubContent, setGithubContent] = useState<PostCardProps[]>(
    [] as PostCardProps[],
  )

  const fetchGithub = useCallback(async (query?: string) => {
    const response = await api.get(
      `search/issues?q=${query}is:issue%20is:open%20repo:jones-bass/bloggithub`,
    )

    setGithubContent(response.data.items)
    setPostsCountTotal(response.data.total_count)
  }, [])

  useEffect(() => {
    fetchGithub('')
  }, [fetchGithub])

  const loadDados = async (rota: string) => {
    setLoading(true)
    try {
      const response = await api.get(rota)
      const data = await response.data
      setDados(data)
      return data
    } catch (error) {
      alert('Erro ao exibir a sessão de produtos, tente novamente mais tarde.')
      setDados([])
      return []
    } finally {
      setLoading(false)
    }
  }

  return (
    <FetchContext.Provider
      value={{
        postsCountTotal,
        dados,

        loading,
        loadDados,
        githubContent,
        fetchGithub,
      }}
    >
      {children}
    </FetchContext.Provider>
  )
}
