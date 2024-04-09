import './App.css'
import Navbar from './components/Navbar/Navbar'
import InfoContainer from './components/InfoContainer/InfoContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={ <InfoContainer /> } />

      </Routes>
      
      <Navbar />
    </BrowserRouter>
  )
}

export default App
