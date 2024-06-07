import { BsSearch } from 'react-icons/bs'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { FormContainer, SearchFormContainer } from './styles'
import { useContext } from 'react'
import { FetchContext } from '../../contexts/FetchContext'

const searchFromSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFromSchema>

export function SearchForm() {
  const { fetchGithub, postsCountTotal } = useContext(FetchContext)

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
    <FormContainer>
      <div className="containerText">
        <h3>Publicações</h3>
        <p>
          {postsCountTotal} {''}publicações
        </p>
      </div>
      <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />

        <button type="submit" disabled={isSubmitting}>
          <BsSearch />
          Buscar
        </button>
      </SearchFormContainer>
    </FormContainer>
  )
}
