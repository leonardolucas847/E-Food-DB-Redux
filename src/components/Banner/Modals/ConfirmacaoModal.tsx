import { useSelector } from 'react-redux'
import { Prato } from '../../Restaurantes'
import * as S from '../styles'
import Modal from './Modal'

type ConfirmacaoModalProps = {
  isOpen: boolean
  onClose: () => void
  pedido: any
}

const ConfirmacaoModal = ({
  isOpen,
  onClose,
  pedido
}: ConfirmacaoModalProps) => {
  const itens = useSelector(
    (state: { carrinho: { itens: Prato[] } }) => state.carrinho.itens
  )
  if (!pedido) return null
  const total = pedido.produtos.reduce(
    (acc: number, item: { id: number; price: number }) => acc + item.price,
    0
  )

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.ModalTitulo>Pedido Realizado - {pedido.orderId}</S.ModalTitulo>

      <S.P>
        Estamos felizes em informar que seu pedido já está em preparação! Em
        breve, você receberá atualizações sobre o status da sua entrega.
      </S.P>

      <S.ModalTitulo>Resumo do Pedido</S.ModalTitulo>
      <S.P>
        <strong>Protocolo:</strong> {pedido.orderId}
        <p> Preço dos Produtos</p>
        {pedido.produtos.map((item: { id: number; price: number }) => (
          <div key={item.id}>
            <p> - R$ {item.price.toFixed(2)}</p>
          </div>
        ))}
        <p>
          <strong>Total: R$ {total.toFixed(2)}</strong>
        </p>
      </S.P>

      <S.ModalTitulo>Endereço de entrega</S.ModalTitulo>
      <S.P>
        <S.P>Recebedor: {pedido.entrega.receiver}</S.P>
        <S.P>
          Endereço: {pedido.entrega.address.description} —
          {pedido.entrega.address.complement} <br /> Telefone :{' '}
          {pedido.entrega.address.number}
        </S.P>
        <S.P>
          Cidade: {pedido.entrega.address.city} — CEP:{' '}
          {pedido.entrega.address.zipCode}
        </S.P>
      </S.P>

      <S.Buttons>
        <button className="Next" onClick={onClose}>
          Concluir
        </button>
      </S.Buttons>
    </Modal>
  )
}

export default ConfirmacaoModal
