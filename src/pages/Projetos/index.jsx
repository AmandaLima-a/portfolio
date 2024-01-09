import { Caixa, Container, ContainerItens, Link } from "./style";

function App() {

    return (
        <>
            <Container>
                <ContainerItens>
                    <h2>Projetos</h2>
                    <Caixa>
                        <Link href="https://devmoviesp.netlify.app/" target="_blank">DevMovies</Link>
                    </Caixa>
                    <Caixa>
                        <Link href="https://amandalima-a.github.io/instagram/" target="_blank">Login Instagram</Link>
                    </Caixa>
                    <Caixa>
                        <Link href="https://amandalima-a.github.io/gerador-de-senha/" target="_blank">Gerador de Senha</Link>
                    </Caixa>
                    <Caixa>
                        <Link href="https://amandalima-a.github.io/conversor-de-moedas/" target="_blank">Conversor de Moedas</Link>
                    </Caixa>
                    <Link href="https://github.com/AmandaLima-a?tab=repositories" target="_blank">Mais...</Link>
                </ContainerItens>
            </Container>
        </>
    )
}

export default App