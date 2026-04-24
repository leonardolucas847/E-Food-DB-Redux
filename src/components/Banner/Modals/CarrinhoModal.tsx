import { Prato } from '../../Restaurantes'
import * as S from '../styles'
import Modal from './Modal'
import lixo from '../../../assets/LixoCarrinho.png'

type CarrinhoModalProps = {
  isOpen: boolean
  itens: Prato[]
  totalPrecos: number
  onClose: () => void
  onNext: () => void
  removeItem: (index: number) => void
}

const CarrinhoModal = ({
  isOpen,
  itens,
  totalPrecos,
  onClose,
  onNext,
  removeItem
}: CarrinhoModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {itens?.map((item, index) => (
        <div className="div1" key={index}>
          <img src={item.foto} alt={item.nome} />
          <div className="div2">
            <h2>{item.nome}</h2>
            <p>R$ {item.preco.toFixed(2)}</p>
          </div>
          <button className="lixo" onClick={() => removeItem(index)}>
            <img src={lixo} alt="Remover" />
          </button>
        </div>
      ))}
      <S.Price>
        Valor total <span>R$ {totalPrecos.toFixed(2)}</span>
      </S.Price>
      <button className="Next" onClick={onNext}>
        Continuar com a entrega
      </button>
    </Modal>
  )
}

export default CarrinhoModal
