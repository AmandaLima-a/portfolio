import Perfil from '../../assets/img-home.jpg'
import { Container, ContainerItens, Informacoes, ContainerButton, ContainerImagens, ContainerImg, Imagens, ButtonRed, ButtonWhite } from './style'
import { useNavigate } from 'react-router-dom'

import Html from '../../assets/logo-html-5-256.png'
import Css from '../../assets/logo-css-3-256.png'
import JavaScript from '../../assets/logo-javascript-icon-256.png'
import LogoReact from '../../assets/logo-react-256.png'
import Node from '../../assets/logo-node-js-256.png'
import Git from '../../assets/git-256.png'


function App() {
  const navigate = useNavigate()

  return (
    <>
      <Container>

        <ContainerItens>
          <Informacoes>
            <h1>Olá!</h1>
            <h3>Me chamo Amanda Lima,</h3>
            <p>tenho 20 anos e sou uma desenvolvedora Front end Jr. <br/> Possuo sólidas habilidades em HTML, CSS e JavaScript, em <br/> conjunto com React e Node. Também possuo conhecimento de <br/> ferramentas como Git e Github para auxiliar no <br/> desenvolvimento colaborativo.</p>

            <ContainerButton>
              <ButtonWhite onClick={() => navigate(`/projetos`)}>Projetos</ButtonWhite>
              <ButtonRed onClick={() => navigate(`/contato`)}>Contato</ButtonRed>
            </ContainerButton>
          </Informacoes>

          <img src={Perfil} alt="imagem-perfil" />
        </ContainerItens>

        <Imagens>
          <ContainerImagens>
            <img src={Html} alt="logo-html5" />
            <img src={Css} alt="logo-css3" />
            <img src={JavaScript} alt="logo-javascript" />
            <img src={LogoReact} alt="logo-react" />
            <img src={Node} alt="logo-node" />
          </ContainerImagens>

          <ContainerImg>
            <img src={Git} alt="logo-git" />
          </ContainerImg>
        </Imagens>
      </Container>
    </>
  )
}

export default App
