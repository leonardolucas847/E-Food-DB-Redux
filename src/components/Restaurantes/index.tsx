import RestaurantesList from '../RestaurantesList'

import { ConteudoHome } from './styles'
import { useEffect, useState } from 'react'
export type Prato = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}
export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Prato[]
}

const RestaurantesHome = () => {
  const [melhoresRestaurantes, setMelhoresRestaurantes] = useState<
    Restaurant[]
  >([])
  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setMelhoresRestaurantes(res))
  }, [])

  return (
    <ConteudoHome>
      <RestaurantesList rests={melhoresRestaurantes} />
    </ConteudoHome>
  )
}

export default RestaurantesHome
