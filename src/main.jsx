import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GeoData from './context/DataContext.jsx'

createRoot(document.getElementById('root')).render(
  <GeoData>
    <App />
  </GeoData>
)
