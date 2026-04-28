import { useFormik } from 'formik'
import * as S from '../styles'
import Modal from './Modal'
import * as Yup from 'yup'
import { DadosState } from '../../../store/slices/dadosSlice'
import { useSelector } from 'react-redux'
import { Deliviry, useDadosMutation } from '../../api/apiDados'
import { Prato } from '../../Restaurantes'
type PagamentoModalProps = {
  isOpen: boolean
  onClose: () => void
  totalPrecos: number
  onConfirm: (data: any, entrega: Deliviry) => void
  onBack: () => void
}

const PagamentoModal = ({
  isOpen,
  onClose,
  totalPrecos,
  onConfirm,
  onBack
}: PagamentoModalProps) => {
  const [dados] = useDadosMutation()
  const itens = useSelector(
    (state: { carrinho: { itens: Prato[] } }) => state.carrinho.itens
  )
  const select = useSelector((state: { dados: DadosState }) => state.dados.data)
  const form = useFormik({
    initialValues: {
      nome: '',
      numberoCartao: '',
      cvv: '',
      mesVenc: '',
      anoVenc: ''
    },
    validationSchema: Yup.object({
      nome: Yup.string().required('Campo obrigatório'),
      numberoCartao: Yup.string().required('Campo obrigatório'),
      cvv: Yup.string().required('Campo obrigatório'),
      mesVenc: Yup.string().required('Campo obrigatório'),
      anoVenc: Yup.string().required('Campo obrigatório')
    }),
    onSubmit: (values) => {
      if (!select) {
        console.log('Dados de entrega não encontrados!')
        return
      }
      dados({
        products: itens.map((item: Prato) => ({
          id: item.id,
          name: item.nome,
          price: item.preco
        })),
        deliviry: select,
        payment: {
          card: {
            number: values.numberoCartao,
            name: values.nome,
            code: Number(values.cvv),
            expires: {
              month: Number(values.mesVenc),
              year: Number(values.anoVenc)
            }
          }
        }
      }).then((res) => {
        if ('data' in res) {
          console.log(JSON.stringify(res.data, null, 2))
          onConfirm(res.data, select)
        }
      })
    }
  })

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.ModalTitulo>
        Pagamento - Valor a pagar: R$ {totalPrecos.toFixed(2)}
      </S.ModalTitulo>
      <S.FormEntrega onSubmit={form.handleSubmit}>
        <S.Campo>
          <label htmlFor="nomeCartao">Nome no cartão</label>
          <input
            id="nomeCartao"
            type="text"
            name="nome"
            value={form.values.nome}
            onChange={form.handleChange}
          />
        </S.Campo>
        <S.CampoNumber>
          <S.Campo>
            <label htmlFor="numb">Número do cartão</label>
            <input
              id="numb"
              type="text"
              name="numberoCartao"
              value={form.values.numberoCartao}
              onChange={form.handleChange}
            />
          </S.Campo>
          <S.Campo>
            <label htmlFor="cvv">CVV</label>
            <input
              id="cvv"
              type="text"
              name="cvv"
              value={form.values.cvv}
              onChange={form.handleChange}
            />
          </S.Campo>
        </S.CampoNumber>

        <S.CampoNumber>
          <S.Campo>
            <label htmlFor="MVenc">Mês de vencimento</label>
            <input
              id="MVenc"
              type="text"
              name="mesVenc"
              value={form.values.mesVenc}
              onChange={form.handleChange}
            />
          </S.Campo>
          <S.Campo>
            <label htmlFor="AVenc">Ano de vencimento</label>
            <input
              id="AVenc"
              type="text"
              name="anoVenc"
              value={form.values.anoVenc}
              onChange={form.handleChange}
            />
          </S.Campo>
        </S.CampoNumber>
        <S.Buttons>
          <button className="Next" type="submit" style={{ marginTop: '24px' }}>
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
