import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 472px;
  background-color: ${cores.branco};

  height: 420px;

  @media (max-width: 1024px) {
    width: 90%;
    height: auto;
    margin-bottom: 24px; /* ← separa os cards entre si */
    overflow: hidden;
  }
`

export const NomeNota = styled.div`
  background-color: ${cores.branco};
  padding: 8px;

  display: flex;
  font-weight: 800;
  justify-content: space-between;
  span {
    background-color: transparent;
    display: flex;
    color: ${cores.vermelho};
  }
`
export const Image = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 217px;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 1024px) {
    height: 300px; /* ← altura fixa para a imagem no mobile */
    max-height: none;
  }
`
export const Descricao = styled.p`
  background-color: ${cores.branco};
  max-height: 120px;
  margin: 8px;
  margin-right: 0px;
  margin-left: 0px;
  padding-left: 8px;
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;

  color: ${cores.vermelho};
  @media (max-width: 1024px) {
    margin-bottom: 40px;
  }
`

export const Titulo = styled.h3`
  background-color: ${cores.branco};
  max-width: 240px;
  height: 21px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: ${cores.vermelho};
`
export const Infos = styled.div`
  padding-top: 16px;
  padding-right: 16px;
  position: absolute;
  right: 0;
  z-index: 1;
  display: inline-block;
  color: ${cores.vermelho};
  background-color: transparent;
  span {
    display: block;
    background-color: transparent;
    color: ${cores.vermelho};
  }
`
export const Botao = styled.div`
  background-color: ${cores.branco};
  padding-top: 8px;

  a {
    text-decoration: none;
    background-color: transparent;
    color: ${cores.fundo};
  }
`
