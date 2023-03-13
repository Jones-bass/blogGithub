import { useNavigate } from 'react-router-dom'
import { Perfil } from '../../components/perfil'

export function Posts() {
  const navigate = useNavigate()

  function handleLogin() {
    // Lógica de autenticação do usuário
    navigate('/')
  }
  return (
    <div>
      <Perfil
        name="JavaScript data types and data structures"
        onClick={handleLogin}
        variant="secundary"
      />
    </div>
  )
}
