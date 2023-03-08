import { Link } from 'react-router-dom'

export function Posts() {
  return (
    <div>
      <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
        Voltar
      </Link>
    </div>
  )
}
