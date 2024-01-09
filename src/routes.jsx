import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Contato from './pages/Contato'
import Projetos from './pages/Projetos'
import Sobre from './pages/Sobre'
import DefaultLayout from './layout/DefaultLayout'


function Routers() {

    return (
        <Router>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/contato' element={<Contato />} />
                    <Route path='/projetos' element={<Projetos />} />
                    <Route path='/sobre-mim' element={<Sobre />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default Routers