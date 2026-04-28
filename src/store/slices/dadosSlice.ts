import { Deliviry } from '../../components/api/apiDados'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface DadosState {
  data: Deliviry
}

const initialState: DadosState = {
  data: {
    receiver: '',
    address: {
      description: '',
      city: '',
      zipCode: '',
      number: 0,
      complement: ''
    }
  }
}

const dadosSlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    setDados: (state, action: PayloadAction<Deliviry>) => {
      state.data = action.payload
    }
  }
})

export const { setDados } = dadosSlice.actions

export default dadosSlice.reducer
