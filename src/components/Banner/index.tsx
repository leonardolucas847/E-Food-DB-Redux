import * as S from './styles'

import FundoGF from '../../assets/FundoGF.png'

import logo from '../../assets/logo.svg'

import carrinho from '../../assets/carrinho-vazio.png'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectItens,
  selectNumeroDeItensNoCarrinho,
  selectSomarPrecos,
  removerItem,
  voltarHome
} from '../../store/slices/carrinhoSlice'
import CarrinhoModal from './Modals/CarrinhoModal'
import EnderecoModal from './Modals/EnderecoModal'
import PagamentoModal from './Modals/PagamentoModal'
import ConfirmacaoModal from './Modals/ConfirmacaoModal'

type Props = {
  type: 'home' | 'perfil'
  nome?: string
  tipo?: string
  capa?: string
}

function TamanhoTela() {
  const [largura, setLargura] = useState(window.innerWidth)

  useEffect(() => {
    const redimensiona = () => setLargura(window.innerWidth)

    window.addEventListener('resize', redimensiona)
    return () => window.removeEventListener('resize', redimensiona)
  }, [])

  return largura
}

const Banner = ({ type, nome, tipo, capa }: Props) => {
  const dispatch = useDispatch()
  const [pedidoConfirmado, setPedidoConfirmado] = useState<any>(null)
  const [activeModal, setActiveModal] = useState<
    'carrinho' | 'endereco' | 'pagamento' | 'confirmacao' | null
  >(null)

  const openCart = () => setActiveModal('carrinho')
  const openAddress = () => setActiveModal('endereco')
  const openPayment = () => setActiveModal('pagamento')
  const closeModal = () => setActiveModal(null)

  const itens = useSelector(selectItens)
  const numeroDeItensNoCarrinho = useSelector(selectNumeroDeItensNoCarrinho)
  const totalPrecos = useSelector(selectSomarPrecos)
  const RenderizaCarrinho = () => {
    const largura = TamanhoTela()
    const telaPequena = largura < 768

    return (
      <div>
        {telaPequena && (
          <span
            style={{ display: 'flex', alignItems: 'center', fontSize: '20px' }}
          >
            {numeroDeItensNoCarrinho}
            -
            <img src={carrinho} alt="Carrinho" style={{ width: '24px' }} />
          </span>
        )}
        {!telaPequena && (
          <span>{numeroDeItensNoCarrinho} - produto(s) no carrinho</span>
        )}
      </div>
    )
  }
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
        <S.CardImagem style={{ backgroundImage: `url(${capa})` }}>
          <div className="container ">
            <p style={{ fontWeight: '300' }}>{tipo}</p>
            <p>{nome}</p>
          </div>
        </S.CardImagem>
        <S.Detalhes className="container">
          <S.VoltarHome to="/" onClick={() => dispatch(voltarHome())}>
            Restaurantes
          </S.VoltarHome>
          <S.LogoEfood src={`${logo}`} />
          <S.Carrinho
            onClick={openCart}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <RenderizaCarrinho />
          </S.Carrinho>
        </S.Detalhes>
      </S.BannerLayout>
      <CarrinhoModal
        isOpen={activeModal === 'carrinho'}
        onClose={closeModal}
        itens={itens}
        totalPrecos={totalPrecos}
        onNext={openAddress}
        removeItem={(index) => dispatch(removerItem(index))}
      />
      <EnderecoModal
        isOpen={activeModal === 'endereco'}
        onClose={closeModal}
        onNext={openPayment}
        onBack={openCart}
      />
      <PagamentoModal
        isOpen={activeModal === 'pagamento'}
        onClose={closeModal}
        totalPrecos={totalPrecos}
        onConfirm={(data, entrega) => {
          setPedidoConfirmado({
            ...data,
            entrega,
            produtos: itens.map((item) => ({ id: item.id, price: item.preco }))
          })

          setActiveModal('confirmacao')
        }}
        onBack={openAddress}
      />
      <ConfirmacaoModal
        isOpen={activeModal === 'confirmacao'}
        onClose={closeModal}
        pedido={pedidoConfirmado}
      />
    </>
  )
}
export default Banner
