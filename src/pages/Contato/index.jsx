import { Container, ContainerItens, Item, Link } from "./style";

import Email from '../../assets/o-email.png'
import Linkedin from '../../assets/linkedin.png'
import Github from '../../assets/github.png'
import Contato from '../../assets/chamada-telefonica.png'

function App() {

    return (
        <>
            <Container>
                <ContainerItens>
                    <Item>
                        <img src={Email} alt="logo-email"/>
                        <p>amandasuelemjl@gmail.com</p>
                    </Item>
                    <Item>
                        <img src={Linkedin}/>
                        <Link href="http://www.linkedin.com/in/amanda-de-jesus-lima/" target="_blank">http://www.linkedin.com/in/amanda-de-jesus-lima/</Link>
                    </Item>
                    <Item>
                        <img src={Github} alt="logo-github"/>
                        <Link href="https://github.com/AmandaLima-a" target="_blank">https://github.com/AmandaLima-a</Link>
                    </Item>
                    <Item>
                        <img src={Contato} alt="logo-chamada-telefonica"/>
                        <p>(51) 984678883</p>
                    </Item>

                </ContainerItens>
            </Container>
        </>
    )
}

export default App