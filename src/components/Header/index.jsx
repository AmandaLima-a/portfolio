import { Li, Menu } from './style'
import { Link, useLocation } from 'react-router-dom'

function Header() {
    const { pathname } = useLocation()

    return (
        <div>
            <Menu>
                <Li isActive={pathname === '/'}>
                    <Link to='/'>Início</Link>
                </Li>
                <Li>
                    Projetos
                </Li>
                <Li>
                    Contato
                </Li>
                <Li>
                    Sobre Mim
                </Li>
            </Menu>
        </div>
    )
}

export default Header