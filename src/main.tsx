import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { defineCustomElements as defineMapElements } from '@arcgis/map-components/dist/loader'

defineMapElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.30/assets" });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)