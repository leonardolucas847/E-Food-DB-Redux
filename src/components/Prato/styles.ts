import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 320px;
  height: 338px;

  background-color: ${cores.vermelho};
  @media (max-width: 1024px) {
    height: auto;
    margin-bottom: 24px; /* ← separa os cards entre si */
    overflow: hidden;
  }
`

export const ImageCardapio = styled.div`
  display: flex;
  margin: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 167px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 1024px) {
    height: 300px; /* ← altura fixa para a imagem no mobile */
    max-height: none;
  }
`
export const DescricaoCardapio = styled.p`
  background-color: ${cores.vermelho};
  color: ${cores.amarelo};
  max-height: 88px;
  margin: 8px;
  width: 304px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media (max-width: 1024px) {
    padding-bottom: 24px;
    -webkit-line-clamp: unset;
  }
`

export const TituloCardapio = styled.h3`
  background-color: ${cores.vermelho};
  padding-left: 8px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: ${cores.amarelo};
`
export const BotaoCarrinho = styled.button`
  background-color: ${cores.amarelo};
  color: ${cores.vermelho};
  margin: 0 8px 8px 8px;
  font-weight: 700;
  text-align: center;
  width: 304px;
  height: 24px;
  border: none;
  cursor: pointer;
  font-size: 14px;
`
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
  list-style: none;
  font-size: 14px;
  position: relative;
  display: flex;
  flex-direction: row;
  background-color: ${cores.vermelho};
  max-width: 1024px;
  align-items: flex-start;
  padding: 32px;
  width: 90%;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 16px;
  }
  .close {
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 8px;
    background-color: ${cores.vermelho};
    border: none;
    @media (max-width: 1024px) {
      top: 16px;
    }
    img {
      height: 16px;
      width: 16px;
      margin-right: 0px;
    }
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    flex-shrink: 0;
    margin-right: 24px;
    @media (max-width: 1024px) {
      max-width: 400px;
      width: 100%;
      height: auto;
      margin-right: 0px;
      margin-top: 16px;
    }
  }
`
export const infosPrato = styled.div`
  color: ${cores.branco};
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
  }
  h2 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
    @media (max-width: 1024px) {
      font-size: 20px;
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
    @media (max-width: 1024px) {
      font-size: 16px;
      max-width: 400px;
      margin-bottom: 8px;
    }
  }

  button {
    width: max-content;
    padding: 4px 8px;
    cursor: pointer;
  }
`
