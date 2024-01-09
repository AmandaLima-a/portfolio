import styled from 'styled-components'
import Background from '../../assets/background.jpg'

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ContainerItens = styled.div`
    display: flex; 
    gap: 50px;
    flex-direction: column;
`

export const Link = styled.a`
    color: white;
    text-align: end;
`

export const Caixa = styled.div`
    background: #F03C2E;
    padding: 20px;
    border-radius: 40px;
    text-align: center;
    width: 700px;
`