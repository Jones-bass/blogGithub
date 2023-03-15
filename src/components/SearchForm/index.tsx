import { BsSearch } from 'react-icons/bs'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { SearchFormContainer } from './styles'
import { useAuth } from '../../hooks/useAuth'

const searchFromSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFromSchema>

export function SearchForm() {
  const { fetchGithub } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFromSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchGithub(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />

      <button type="submit" disabled={isSubmitting}>
        <BsSearch size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
