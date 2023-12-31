import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes'

import GlobalStyle from './styles/GlobalStyle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes />
    <GlobalStyle />
  </React.StrictMode>,
)
