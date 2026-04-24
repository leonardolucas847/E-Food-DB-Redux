import { styled } from 'styled-components'
import { cores } from '../../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  height: 100vh;
  width: 400px;
  background-color: ${cores.vermelho};
  padding: 32px;
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.15);
  overflow-y: auto;
  z-index: 1001;

  @media (max-width: 1024px) {
    position: relative;
    width: 100%;
    margin-right: 16px;
    padding: 16px;
  }
`

export const ModalTitulo = styled.h2`
  color: ${cores.amarelo};
  margin-bottom: 16px;
  margin-top: 32px;
  margin-left: 8px;
`

export const FormEntrega = styled.form`
  display: flex;
  flex-direction: column;
`

export const Campo = styled.div`
  margin: 8px;
  display: flex;
  color: ${cores.amarelo};
  font-weight: bold;
  flex-direction: column;
  input {
    margin-top: 8px;
    padding: 8px;
    background-color: ${cores.amarelo};
    border: none;
    font-weight: bold;
    font-size: 14px;
    width: 100%;
    box-sizing: border-box;
  }
`

export const CampoNumber = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 0px;
  }
  ${Campo} {
    flex: 1;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 8px;
  .Next {
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    padding: 6px;
    background-color: ${cores.amarelo};
    color: ${cores.vermelho};
    border: none;
  }
`
