import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import './styles/about.css'
import './styles/bottom-section.css'
import './styles/contact.css'
import './styles/general.css'
import './styles/main-image.css'
import './styles/navbar-small.css'
import './styles/navbar.css'
import './styles/pop-dest.css'
import './styles/recent-trips.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
