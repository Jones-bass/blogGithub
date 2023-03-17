import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
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

interface IAuthContext {
  githubContent: PostCardProps[]
  fetchGithub: (query: string) => Promise<void>
}

interface IAuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as IAuthContext)

export const AuthContextProvider = ({
  children,
}: IAuthContextProviderProps) => {
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

  return (
    <AuthContext.Provider value={{ githubContent, fetchGithub }}>
      {children}
    </AuthContext.Provider>
  )
}
