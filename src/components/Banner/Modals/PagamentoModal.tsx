import { useFormik } from 'formik'
import * as S from '../styles'
import Modal from './Modal'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { DadosState } from '../../../store/slices/dadosSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Deliviry, useDadosMutation } from '../../api/apiDados'
import { Prato } from '../../Restaurantes'
import { finalizarPedido } from '../../../store/slices/carrinhoSlice'
type PagamentoModalProps = {
  isOpen: boolean
  onClose: () => void
  totalPrecos: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  const dispatch = useDispatch()
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
      numberoCartao: Yup.string()
        .matches(/^\d{4} \d{4} \d{4} \d{4}$/, 'numero de cartao inválido')
        .required('Campo obrigatório'),
      cvv: Yup.string()
        .matches(/^\d{3}$/, 'o campo precisa ter exatamente 3 dígitos')
        .required('Campo obrigatório'),
      mesVenc: Yup.number()
        .min(1, 'Mínimo é 1')
        .max(12, 'Mês inválido')
        .required('Campo obrigatório'),
      anoVenc: Yup.number()
        .min(2026, 'Ano de vencimento deve ser 2026 ou posterior')
        .required('Campo obrigatório')
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
          dispatch(finalizarPedido())
          onConfirm(res.data, select)
        }
      })
    }
  })
  const getError = (field: keyof typeof form.values) =>
    form.touched[field] && form.errors[field] ? (
      <small>{form.errors[field]}</small>
    ) : null
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
            onBlur={form.handleBlur}
          />
          {getError('nome')}
        </S.Campo>
        <S.CampoNumber>
          <S.Campo>
            <label htmlFor="numb">Número do cartão</label>
            <InputMask
              mask="9999 9999 9999 9999"
              id="numb"
              type="text"
              name="numberoCartao"
              maskChar={null}
              value={form.values.numberoCartao}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              placeholder="0000 0000 0000 0000"
            />
            {getError('numberoCartao')}
          </S.Campo>
          <S.Campo>
            <label htmlFor="cvv">CVV</label>
            <InputMask
              mask="999"
              id="cvv"
              type="text"
              name="cvv"
              maskChar={null}
              placeholder="000"
              value={form.values.cvv}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {getError('cvv')}
          </S.Campo>
        </S.CampoNumber>

        <S.CampoNumber>
          <S.Campo>
            <label htmlFor="MVenc">Mês de vencimento</label>
            <InputMask
              mask="99"
              id="MVenc"
              type="text"
              name="mesVenc"
              maskChar={null}
              placeholder="00"
              value={form.values.mesVenc}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {getError('mesVenc')}
          </S.Campo>
          <S.Campo>
            <label htmlFor="AVenc">Ano de vencimento</label>
            <InputMask
              mask="9999"
              id="AVenc"
              type="text"
              name="anoVenc"
              maskChar={null}
              placeholder="0000"
              value={form.values.anoVenc}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {getError('anoVenc')}
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
