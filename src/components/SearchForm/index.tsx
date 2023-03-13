import { BsSearch } from 'react-icons/bs'

import { SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Buscar conteúdo" />

      <button type="submit">
        <BsSearch size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
