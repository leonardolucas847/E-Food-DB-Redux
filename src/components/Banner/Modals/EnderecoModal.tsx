import { useFormik } from 'formik'
import * as S from '../styles'
import Modal from './Modal'
import * as Yup from 'yup'

import InputMask from 'react-input-mask'
import { useDispatch } from 'react-redux'
import { setDados } from '../../../store/slices/dadosSlice'
type EnderecoModalProps = {
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onBack: () => void
}

const EnderecoModal = ({
  isOpen,
  onClose,
  onNext,
  onBack
}: EnderecoModalProps) => {
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      nome: '',
      endereco: '',
      cidade: '',
      cep: '',
      num: '',
      complemento: ''
    },
    validationSchema: Yup.object({
      nome: Yup.string().required('Campo obrigatório'),
      endereco: Yup.string().required('Campo obrigatório'),
      cidade: Yup.string().required('Campo obrigatório'),
      cep: Yup.string()
        .min(9, 'O campo precisa ter 8 caracteres')
        .max(9, 'O campo precisa ter 8 caracteres')
        .required('Campo obrigatório'),
      num: Yup.string().required('Campo obrigatório')
    }),
    onSubmit: (values) => {
      const payload = {
        receiver: values.nome,
        address: {
          description: values.endereco,
          city: values.cidade,
          zipCode: values.cep,
          number: Number(values.num),
          complement: values.complemento
        }
      }
      dispatch(setDados(payload))
      onNext()
    }
  })
  const getError = (field: keyof typeof form.values) =>
    form.touched[field] && form.errors[field] ? (
      <small>{form.errors[field]}</small>
    ) : null
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.ModalTitulo>Entrega</S.ModalTitulo>
      <S.FormEntrega onSubmit={form.handleSubmit}>
        <S.Campo>
          <label htmlFor="nome">Quem ira receber</label>
          <input
            id="nome"
            type="text"
            name="nome"
            value={form.values.nome}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {getError('nome')}
        </S.Campo>
        <S.Campo>
          <label htmlFor="endereco">Endereço de entrega</label>
          <input
            id="endereco"
            type="text"
            name="endereco"
            value={form.values.endereco}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {getError('endereco')}
        </S.Campo>
        <S.Campo>
          <label htmlFor="cidade">Cidade</label>
          <input
            id="cidade"
            type="text"
            name="cidade"
            value={form.values.cidade}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {getError('cidade')}
        </S.Campo>
        <S.CampoNumber>
          <S.Campo>
            <label htmlFor="cep">CEP</label>
            <InputMask
              mask="99999-999"
              id="cep"
              type="text"
              name="cep"
              maskChar={null}
              value={form.values.cep}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {getError('cep')}
          </S.Campo>
          <S.Campo>
            <label htmlFor="num">Número</label>
            <input
              id="num"
              type="text"
              name="num"
              value={form.values.num}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {getError('num')}
          </S.Campo>
        </S.CampoNumber>
        <S.Campo>
          <label htmlFor="complemento">Complemento (Opcional)</label>
          <input
            id="complemento"
            type="text"
            name="complemento"
            value={form.values.complemento}
            onChange={form.handleChange}
          />
        </S.Campo>
        <S.Buttons>
          <button className="Next" type="submit">
            Continuar com o pagamento
          </button>
          <button className="Next" type="button" onClick={onBack}>
            Voltar para o carrinho
          </button>
        </S.Buttons>
      </S.FormEntrega>
    </Modal>
  )
}

export default EnderecoModal
