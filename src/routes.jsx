import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import DefaultLayout from './layout/DefaultLayout'


function Routers() {

    return (
        <Router>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path='/' element={<Home />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default Routers