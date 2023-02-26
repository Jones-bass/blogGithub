export interface IFormLogin {
  cep: string
  rua: string
  numero: number
  complemento: string | number
  bairro: string | number
  cidade: string | number
  uf: string
}

export const defaultValues: IFormLogin = {
  cep: '',
  rua: '',
  numero: 0,
  complemento: '',
  bairro: '',
  cidade: '',
  uf: '',
}
