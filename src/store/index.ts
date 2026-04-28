import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './slices/carrinhoSlice'
import dadosReducer from './slices/dadosSlice'
import api from '../components/api/apiDados'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    dados: dadosReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
