import { useLocation } from 'react-router-dom'
import Banner from '../../components/Banner'
import Cardapio from '../../components/Cardapio'
import { Restaurant } from '../../components/Restaurantes'

const Cardapios = () => {
  const { state } = useLocation()
  const restaurante: Restaurant = state?.restaurante

  return (
    <>
      <Banner
        type="perfil"
        nome={restaurante.titulo}
        tipo={restaurante.tipo}
        capa={restaurante.capa}
      />
      <div>
        <Cardapio title={restaurante.id} menu={restaurante.cardapio} />
      </div>
    </>
  )
}

export default Cardapios
