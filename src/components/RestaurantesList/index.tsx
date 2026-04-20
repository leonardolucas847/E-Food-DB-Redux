import MRestaurante from '../Restaurante'
import { Restaurant } from '../Restaurantes'
import { List, Section } from './styles'
export type Props = {
  rests: Restaurant[]
}
const RestaurantesList = ({ rests }: Props) => (
  <Section>
    <div className="container">
      <List>
        {rests.map((restaurante) => (
          <MRestaurante
            key={restaurante.id}
            destacado={restaurante.destacado}
            descricao={restaurante.descricao}
            capa={restaurante.capa}
            tipo={restaurante.tipo}
            avaliacao={restaurante.avaliacao}
            titulo={restaurante.titulo}
            id={restaurante.id}
            cardapio={restaurante.cardapio}
          />
        ))}
      </List>
    </div>
  </Section>
)

export default RestaurantesList
