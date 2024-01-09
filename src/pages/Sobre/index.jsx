import { Bloco1, Container, ContainerItens, H2, Imagens, Texto } from "./style";

import Foto1 from "../../assets/eu-e-ela.jpg"
import Foto2 from "../../assets/inter2.jpg"
import Foto3 from "../../assets/praia.jpg"
import Foto4 from "../../assets/churras.jpg"
import Foto5 from "../../assets/familia.jpg"
import Foto6 from "../../assets/familia2.jpg"


function App() {

    return (
        <>
            <Container>
                <ContainerItens>
                    <Texto>
                        <p>Meu nome é Amanda, tenho 20 <br/>
                        anos e sou do Rio Grande do Sul. <br/>
                        Sou uma desenvolvedora Front end <br/>
                        e amo oque faço. Sou uma pessoa <br/>
                        extrovertida, esforçada e persistente. <br/>
                        Sou grata a vida, a família e o resto a <br/>
                        gente corre atrás. Amo codar mas <br/>
                        também amo churrasco, futebol, praia <br/>
                        e passar um tempo com a familia.</p>
                    </Texto>
                    <Imagens>
                        <H2>Hobbies</H2>
                        <Bloco1>
                            <img src={Foto1} />
                            <img src={Foto2} />
                            <img src={Foto3} />
                        </Bloco1>
                        <Bloco1>
                            <img src={Foto4} />
                            <img src={Foto5} />
                            <img src={Foto6} />
                        </Bloco1>
                    </Imagens>
                </ContainerItens>
            </Container>
        </>
    )
}

export default App