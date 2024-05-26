import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={

                            <App />

                    } />
                    <Route path="/product/:idProduct" element={<Header/>} />
                </Routes>
            </BrowserRouter>
)