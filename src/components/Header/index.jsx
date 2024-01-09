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
                <Li isActive={pathname.includes('projetos')}>
                    <Link to='/projetos'>Projetos</Link>
                </Li>
                <Li isActive={pathname.includes('contato')}>
                    <Link to='/contato'>Contato</Link>
                </Li>
                <Li isActive={pathname.includes('sobre-mim')}>
                    <Link to='/sobre-mim'>Sobre Mim</Link>
                </Li>
            </Menu>
        </div>
    )
}

export default Header