import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App'
import './index.css'
import Header from './Components/Header'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './services/AppContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <AppProvider>
<Header/>
 <div className="app-container">
  <App/>
 </div>
 </AppProvider>
  </BrowserRouter>
  
  </React.StrictMode>,
)
