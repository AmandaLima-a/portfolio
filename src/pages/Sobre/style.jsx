import styled from 'styled-components'
import Background from '../../assets/background.jpg'

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContainerItens = styled.div`
    display: flex;
    gap: 120px;
`

export const Texto = styled.div`
    text-align: center;
    font-size: 20px;
    display: flex;
    align-items: center;
    font-weight: 500;
    color: #523a46;
`

export const H2 = styled.h2`
    padding: 25px 20px;
`

export const Imagens = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;

    img {
        width: 130px;
        height: 190px;
        border-radius: 10px;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, .3);
    }
`

export const Bloco1 = styled.div`
    display: flex; 
    gap: 10px;
`
