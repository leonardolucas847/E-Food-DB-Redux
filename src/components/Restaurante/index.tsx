import { cores } from '../../styles'

import {
  Card,
  Descricao,
  Infos,
  Titulo,
  Image,
  NomeNota,
  Botao
} from './styles'
import { FaStar } from 'react-icons/fa'
import Tag from '../Tag'
import { Link } from 'react-router-dom'
import { Restaurant } from '../Restaurantes'

const MRestaurante = ({
  destacado,
  titulo,
  id,
  descricao,
  capa,
  cardapio,
  avaliacao,
  tipo
}: Restaurant) => {
  console.log('destacado:', destacado, typeof destacado)
  return (
    <Card>
      <Image style={{ backgroundImage: `url(${capa})`, height: '217px' }}>
        <Infos>
          {destacado && <Tag>Destaque do dia</Tag>}
          <Tag key={tipo}>{tipo}</Tag>
        </Infos>
      </Image>
      <NomeNota>
        <Titulo>{titulo}</Titulo>
        <span>
          {avaliacao}
          <FaStar
            size={21}
            color={cores.icon}
            style={{ marginLeft: '4px' }}
          />{' '}
        </span>
      </NomeNota>
      <Descricao>{descricao}</Descricao>
      <Botao>
        <Tag size="big">
          <Link
            to={`/restaurante/${id}`}
            state={{
              restaurante: {
                id,
                titulo,
                descricao,
                capa,
                avaliacao,
                tipo,
                cardapio
              }
            }}
          >
            Saiba Mais
          </Link>
        </Tag>
      </Botao>
    </Card>
  )
}

export default MRestaurante
