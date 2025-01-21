import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/navbar/navbar'
import InitialPage from './pages/initial'; // Importación del componente

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <InitialPage/>
  </StrictMode>
)
