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
    flex-direction: column;
    gap: 45px;
    margin-top: 50px;

    img{
        width: 100px;
    }

    p {
        font-size: 30px;
        font-weight: 500;
        color: black;
    }
`

export const Link = styled.a`
    font-size: 30px;
    font-weight: 500;
    color: black;
`

export const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 80px;
    border: 2px dashed black;
    padding: 7px 30px 7px;
`
