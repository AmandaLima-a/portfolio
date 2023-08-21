import styled from 'styled-components'
import Background from '../../assets/background.jpg'


export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    height: 100vh;
    width: 100vw;
`

export const ContainerItens = styled.div`
    display: flex;
    gap: 200px;
    justify-content: center;
    align-items: center;
    padding: 160px 40px 40px;

    img {
        height: 400px;
        border-radius: 30px;
        box-shadow: 1px 2px 2px rgba(0, 0, 0, .4);
    }
`

export const Informacoes = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
`

export const ContainerButton = styled.div`
    display: flex;
    gap: 20px;
    margin: 40px;
`

export const Imagens = styled.div`
    display: flex;
    padding: 40px;
    justify-content: space-between;
`

export const ContainerImagens = styled.div`
    img {
        height: 90px;
    }
`

export const ContainerImg = styled.div`
    display: flex;
    justify-content: flex-end;

    img {
        height: 90px;
    }
`

export const ButtonWhite = styled.button`
    border: 1px solid red;
    border-radius: 0 10px;
    padding: 20px 40px;
    background: transparent;
    font-weight: 800;
    font-size: 20px;
    cursor: pointer;

    &:hover {
        background: red;
        opacity: .4;
        transition: .5s;
    }
`

export const ButtonRed = styled.button`
    border: 1px solid black;
    padding: 20px 40px;
    background: white;
    color: red;
    font-weight: 800;
    font-size: 20px;
    border-radius: 10px 0;
    cursor: pointer;

    &:hover {
        background: transparent;
        opacity: .6;
        transition: .5s;
    }
`