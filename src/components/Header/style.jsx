import styled from 'styled-components'


export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 40px;
    justify-content: flex-end;
    padding: 50px;
    width: 100vw;
    position: absolute;
`

export const Li = styled.li`
    font-weight: 800;
    
    a {
        text-decoration: none;
        color: white;
    }
`