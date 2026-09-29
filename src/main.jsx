// Ponto de entrada da aplicação: carrega as fontes, o CSS global e monta o <App />.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Fontes self-hosted (empacotadas no build, sem depender do Google Fonts)
import '@fontsource-variable/plus-jakarta-sans'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/600.css'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
