import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.amarelo};
  font-size: 14px;
  display: flex;
  flex-direction: column;

  align-items: center;
  height: 300px;
`

export const LogoFooter = styled.img`
  height: 56px;
  margin-top: 40px;
  margin-bottom: 32px;
  @media (max-width: 1024px) {
    height: 64px;
  }
`
export const SectionTitle = styled.h4`
  color: ${cores.branco};
  font-size: 16px;
  font-weight: bold;
`

export const LinksRS = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  background-color: transparent;
`

export const Link = styled.li`
  background-color: transparent;
  a {
    background-color: transparent;
    text-decoration: none;
    margin-right: 4px;
    margin-left: 4px;
  }
  @media (max-width: 1024px) {
    a {
      margin-right: 8px;
      margin-left: 8px;
    }
    img {
      height: 36px;
    }
  }
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
export const Mesage = styled.p`
  font-size: 10px;
  color: ${cores.vermelho};
  background-color: transparent;
  max-width: 480px;
  width: auto;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 40px;

  font-weight; 400px;
    @media (max-width: 1024px) {
    font-size: 10px;
  }
`
