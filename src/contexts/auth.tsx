import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { apiFetch } from '../service/apiFetch'

interface GithubProps {
  id: number
  description: string
  date: string
  title: string
}

interface IAuthContext {
  githubContent: GithubProps[]
  fetchGithub: (query: string) => Promise<void>
}

interface IAuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as IAuthContext)

export const AuthContextProvider = ({
  children,
}: IAuthContextProviderProps) => {
  const [githubContent, setGithubContent] = useState<GithubProps[]>([])

  const fetchGithub = useCallback(async (query?: string) => {
    const response = await apiFetch.get('github', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setGithubContent(response.data)
  }, [])

  useEffect(() => {
    fetchGithub()
  }, [fetchGithub])

  return (
    <AuthContext.Provider value={{ githubContent, fetchGithub }}>
      {children}
    </AuthContext.Provider>
  )
}
