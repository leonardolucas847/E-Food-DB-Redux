import * as S from '../styles'
import Modal from './Modal'

type PagamentoModalProps = {
  isOpen: boolean
  onClose: () => void
  totalPrecos: number
  onConfirm: () => void
  onBack: () => void
}

const PagamentoModal = ({
  isOpen,
  onClose,
  totalPrecos,
  onConfirm,
  onBack
}: PagamentoModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.ModalTitulo>
        Pagamento - Valor a pagar: R$ {totalPrecos.toFixed(2)}
      </S.ModalTitulo>
      <S.FormEntrega>
        <S.Campo>
          <label htmlFor="nomeCartao">Nome no cartão</label>
          <input id="nomeCartao" type="text" />
        </S.Campo>
        <S.CampoNumber>
          <S.Campo>
            <label htmlFor="numb">Número do cartão</label>
            <input id="numb" type="number" />
          </S.Campo>
          <S.Campo>
            <label htmlFor="cvv">CVV</label>
            <input id="cvv" type="number" />
          </S.Campo>
        </S.CampoNumber>

        <S.CampoNumber>
          <S.Campo>
            <label htmlFor="MVenc">Mês de vencimento</label>
            <input id="MVenc" type="number" />
          </S.Campo>
          <S.Campo>
            <label htmlFor="AVenc">Ano de vencimento</label>
            <input id="AVenc" type="number" />
          </S.Campo>
        </S.CampoNumber>
        <S.Buttons>
          <button
            onClick={onConfirm}
            className="Next"
            type="button"
            style={{ marginTop: '24px' }}
          >
            Finalizar Pagamento
          </button>
          <button className="Next" type="button" onClick={onBack}>
            Voltar para o carrinho
          </button>
        </S.Buttons>
      </S.FormEntrega>
    </Modal>
  )
}

export default PagamentoModal
