import * as S from '../styles'
import Modal from './Modal'

type EnderecoModalProps = {
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onBack: () => void
}

const EnderecoModal = ({
  isOpen,
  onClose,
  onNext,
  onBack
}: EnderecoModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.ModalTitulo>Entrega</S.ModalTitulo>
      <S.FormEntrega>
        <S.Campo>
          <label htmlFor="nome">Quem ira receber</label>
          <input id="nome" type="text" />
        </S.Campo>
        <S.Campo>
          <label htmlFor="endereco">Endereço de entrega</label>
          <input id="endereco" type="text" />
        </S.Campo>
        <S.Campo>
          <label htmlFor="cidade">Cidade</label>
          <input id="cidade" type="text" />
        </S.Campo>
        <S.CampoNumber>
          <S.Campo>
            <label htmlFor="cep">CEP</label>
            <input id="cep" type="number" />
          </S.Campo>
          <S.Campo>
            <label htmlFor="telefone">Telefone</label>
            <input id="telefone" type="tel" />
          </S.Campo>
        </S.CampoNumber>
        <S.Campo>
          <label htmlFor="complemento">Complemento (Opcional)</label>
          <input id="complemento" type="text" />
        </S.Campo>
        <S.Buttons>
          <button className="Next" type="button" onClick={onNext}>
            Continuar com o pagamento
          </button>
          <button className="Next" type="button" onClick={onBack}>
            Voltar para o carrinho
          </button>
        </S.Buttons>
      </S.FormEntrega>
    </Modal>
  )
}

export default EnderecoModal
