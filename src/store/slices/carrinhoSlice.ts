import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Prato } from '../../components/Restaurantes'
interface CarrinhoState {
  itens: Prato[]
  orderId: string
}

const initialState: CarrinhoState = {
  itens: [],
  orderId: ''
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarItem: (state, action: PayloadAction<Prato>) => {
      state.itens.push(action.payload)
    },
    removerItem: (state, action: PayloadAction<number>) => {
      state.itens.splice(action.payload, 1)
    },
    finalizarPedido: (state) => {
      state.itens = []
    },
    setIdPedido: (state, action: PayloadAction<string>) => {
      state.orderId = action.payload
    },
    voltarHome: (state) => {
      state.itens = []
    },
    limparOrderId: (state) => {
      state.orderId = ''
    }
  }
})

export const {
  adicionarItem,
  removerItem,
  finalizarPedido,
  voltarHome,
  setIdPedido,
  limparOrderId
} = carrinhoSlice.actions

export const selectItens = (state: { carrinho: CarrinhoState }) =>
  state.carrinho.itens
export const selectOrderId = (state: { carrinho: CarrinhoState }) =>
  state.carrinho.orderId
export const selectNumeroDeItensNoCarrinho = (state: {
  carrinho: CarrinhoState
}) => state.carrinho.itens.length
export const selectSomarPrecos = (state: { carrinho: CarrinhoState }) =>
  state.carrinho.itens.reduce((total, item) => total + item.preco, 0)

export default carrinhoSlice.reducer
