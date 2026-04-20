import insta from '../../assets/instagram-icon.png'
import face from '../../assets/facebook-icon.png'
import twitter from '../../assets/twitter-2-icon.png'

import { Container, Link, LinksRS, LogoFooter, Mesage } from './styles'
import logo from '../../assets/logo.svg'
const Footer = () => (
  <Container>
    <LogoFooter src={`${logo}`} />
    <LinksRS>
      <Link>
        <a href="#">
          <img src={`${insta}`} alt="" />
        </a>
      </Link>
      <Link>
        <a href="#">
          <img src={`${face}`} alt="" />
        </a>
      </Link>
      <Link>
        <a href="#">
          <img src={`${twitter}`} alt="" />
        </a>
      </Link>
    </LinksRS>
    <Mesage>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </Mesage>
  </Container>
)

export default Footer
