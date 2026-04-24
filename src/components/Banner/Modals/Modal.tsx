import ReactDOM from 'react-dom'
import * as S from '../styles'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
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

export default Modal
