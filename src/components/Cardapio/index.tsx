import PratoUnico from '../Prato'
import { Restaurant } from '../Restaurantes'
import { List, Section } from './styles'
export type Props = {
  title: Restaurant['id']
  menu: Restaurant['cardapio']
}
const Cardapio = ({ menu }: Props) => (
  <Section>
    <div className="container">
      <List>
        {menu.map((prato) => (
          <PratoUnico
            id={prato.id}
            key={prato.nome}
            descricao={prato.descricao}
            preco={prato.preco}
            nome={prato.nome}
            foto={prato.foto}
            porcao={prato.porcao}
          />
        ))}
      </List>
    </div>
  </Section>
)

export default Cardapio
