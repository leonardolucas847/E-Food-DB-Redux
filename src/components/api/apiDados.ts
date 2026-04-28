import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type Deliviry = {
  receiver: string
  address: {
    description: string
    city: string
    zipCode: string
    number: number
    complement?: string
  }
}

export type DadosPayload = {
  products: { id: number; price: number }[]
  deliviry: Deliviry
  payment: {
    card: {
      number: string
      name: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dados: builder.mutation<any, DadosPayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { useDadosMutation } = api

export default api
