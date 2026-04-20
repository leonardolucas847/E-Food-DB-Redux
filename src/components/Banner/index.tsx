import * as S from './styles'
import ReactDOM from 'react-dom'
import { Props as PropsModal } from '../Prato/index'
import FundoGF from '../../assets/FundoGF.png'
import logo from '../../assets/logo.svg'
import lixo from '../../assets/LixoCarrinho.png'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectItens,
  selectOrderId,
  selectNumeroDeItensNoCarrinho,
  selectSomarPrecos,
  removerItem,
  finalizarPedido,
  voltarHome
} from '../../store/slices/carrinhoSlice'

type Props = {
  type: 'home' | 'perfil'
}
const Modal = ({ isOpen, onClose, children }: PropsModal) => {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <S.Overlay onClick={onClose}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        {children}
      </S.ModalContainer>
    </S.Overlay>,
    document.body
  )
}

const Banner = ({ type }: Props) => {
  const [activeModal, setActiveModal] = useState<
    'carrinho' | 'endereco' | 'pagamento' | 'confirmacao' | null
  >(null)

  const openCart = () => setActiveModal('carrinho')
  const openAddress = () => setActiveModal('endereco')
  const openPayment = () => setActiveModal('pagamento')
  const openConfirmation = () => setActiveModal('confirmacao')
  const closeModal = () => setActiveModal(null)
  const Conclusao = () => {
    closeModal()
    alert('Pedido finalizado com sucesso!')
  }
  const ConfirmClick = () => {
    dispatch(finalizarPedido())
    openConfirmation()
  }
  const dispatch = useDispatch()
  const itens = useSelector(selectItens)
  const orderId = useSelector(selectOrderId)
  const numeroDeItensNoCarrinho = useSelector(selectNumeroDeItensNoCarrinho)
  const totalPrecos = useSelector(selectSomarPrecos)
  if (type === 'home') {
    return (
      <S.BannerLayout style={{ backgroundImage: `url(${FundoGF})` }}>
        <div>
          <S.LogoEfood src={`${logo}`} style={{ paddingTop: '40px' }} />
          <S.Frase>
            Viva experiências gastronômicas no conforto da sua casa
          </S.Frase>
        </div>
      </S.BannerLayout>
    )
  }

  return (
    <>
      <S.BannerLayout
        style={{
          backgroundImage: `url(${FundoGF})`,
          height: '162px'
        }}
      >
        <S.CardImagem>
          <div className="container ">
            <p style={{ fontWeight: '100' }}>Italiana</p>
            <p>La Dolce Vita Trattoria</p>
          </div>
        </S.CardImagem>
        <S.Detalhes className="container">
          <S.VoltarHome to="/" onClick={() => dispatch(voltarHome())}>
            Restaurantes
          </S.VoltarHome>
          <S.LogoEfood src={`${logo}`} />
          <S.Carrinho onClick={openCart}>
            {numeroDeItensNoCarrinho} - produto(s) no carrinho
          </S.Carrinho>
        </S.Detalhes>
      </S.BannerLayout>
      <Modal
        isOpen={activeModal === 'carrinho'}
        onClose={closeModal}
        titulo={''}
      >
        {itens?.map((item, index) => (
          <div className="div1" key={index}>
            <img src={item.foto} alt={item.nome} />
            <div className="div2">
              <h2>{item.nome}</h2>
              <p>R$ {item.preco.toFixed(2)}</p>
            </div>
            <button
              className="lixo"
              onClick={() => dispatch(removerItem(index))}
            >
              <img src={lixo} alt="Remover" />
            </button>
          </div>
        ))}
        <S.Price>
          Valor total <span>R$ {totalPrecos.toFixed(2)}</span>{' '}
        </S.Price>
        <button className="Next" onClick={openAddress}>
          Continuar com a entrega
        </button>
      </Modal>
      <Modal isOpen={activeModal === 'endereco'} onClose={closeModal} titulo="">
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
            <button className="Next" type="button" onClick={openPayment}>
              Continuar com o pagamento
            </button>
            <button className="Next" type="button" onClick={openCart}>
              Voltar para o carrinho
            </button>
          </S.Buttons>
        </S.FormEntrega>
      </Modal>
      <Modal
        isOpen={activeModal === 'pagamento'}
        onClose={closeModal}
        titulo=""
      >
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
              onClick={ConfirmClick}
              className="Next"
              type="button"
              style={{ marginTop: '24px' }}
            >
              Finalizar Pagamento
            </button>
            <button className="Next" type="button" onClick={openAddress}>
              Voltar para o carrinho
            </button>
          </S.Buttons>
        </S.FormEntrega>
      </Modal>
      <Modal
        isOpen={activeModal === 'confirmacao'}
        onClose={closeModal}
        titulo=""
      >
        <S.ModalTitulo>Pedido Realizado - Código: {orderId}</S.ModalTitulo>
        <S.Mesage>
          <S.P>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido
          </S.P>
          <S.P>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.{' '}
          </S.P>
          <S.P>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
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
            onClick={Conclusao}
            style={{ marginTop: '8px' }}
          >
            Concluir
          </button>
        </S.Buttons>
      </Modal>
    </>
  )
}
export default Banner
