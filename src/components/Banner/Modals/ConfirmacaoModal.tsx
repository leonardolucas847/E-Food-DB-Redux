import * as S from '../styles'
import Modal from './Modal'

type ConfirmacaoModalProps = {
  isOpen: boolean
  onClose: () => void
  orderId: string
  onConclusion: () => void
}

const ConfirmacaoModal = ({
  isOpen,
  onClose,
  orderId,
  onConclusion
}: ConfirmacaoModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.ModalTitulo>Pedido Realizado - Código: {orderId}</S.ModalTitulo>
      <S.Mesage>
        <S.P>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido
        </S.P>
        <S.P>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </S.P>
        <S.P>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </S.P>
        <S.P>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </S.P>
      </S.Mesage>
      <S.Buttons>
        <button
          className="Next"
          type="submit"
          onClick={onConclusion}
          style={{ marginTop: '8px' }}
        >
          Concluir
        </button>
      </S.Buttons>
    </Modal>
  )
}

export default ConfirmacaoModal
