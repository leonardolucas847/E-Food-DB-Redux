import { useState } from 'react'
import ReactDOM from 'react-dom'
import clozed from '../../assets/closeIMG.png'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { adicionarItem } from '../../store/slices/carrinhoSlice'
import { Prato } from '../Restaurantes'
export type Props = {
  isOpen: boolean
  onClose: () => void
  titulo: string
  children: React.ReactNode
}
const Modal = ({ isOpen, onClose, children }: Props) => {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <S.Overlay onClick={onClose}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>
          <img src={clozed} alt="Fechar" />
        </button>
        {children}
      </S.ModalContainer>
    </S.Overlay>,
    document.body
  )
}

const PratoUnico = ({ nome, descricao, foto, preco, porcao, id }: Prato) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => setIsOpen(!isOpen)
  const dispatch = useDispatch()
  const AdicinarAoCarrinho = () => {
    dispatch(
      adicionarItem({
        id,
        nome,
        descricao,
        foto,
        preco,
        porcao
      })
    )
    toggleModal()
  }
  return (
    <>
      <S.Card>
        <S.ImageCardapio
          style={{
            backgroundImage: `url(${foto})`,
            height: '167px',
            width: '304px'
          }}
        ></S.ImageCardapio>
        <S.TituloCardapio>{nome}</S.TituloCardapio>
        <S.DescricaoCardapio>{descricao}</S.DescricaoCardapio>
        <S.BotaoCarrinho type="button" onClick={toggleModal}>
          Mais Detalhes
        </S.BotaoCarrinho>
      </S.Card>
      <Modal isOpen={isOpen} onClose={toggleModal} titulo={nome}>
        <img src={foto} alt={nome} />
        <S.infosPrato>
          <h2>{nome}</h2>
          <S.DescricaoCardapio
            style={{
              marginBottom: '64px',
              WebkitLineClamp: 'unset',
              display: 'block',
              overflow: 'visible',
              maxWidth: '360px',
              height: 'auto'
            }}
          >
            {descricao}
          </S.DescricaoCardapio>
          <S.DescricaoCardapio>{porcao}</S.DescricaoCardapio>
          <S.BotaoCarrinho type="button" onClick={AdicinarAoCarrinho}>
            Adicionar ao Carrinho - R$ {preco.toFixed(2)}
          </S.BotaoCarrinho>
        </S.infosPrato>
      </Modal>
    </>
  )
}

export default PratoUnico
