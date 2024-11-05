import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home.jsx'
import History from './pages/History.jsx'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'

import './App.css'

function App() {


  return (
    <>
      {/* Path for Landing, Home, History */}
      <Header/>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/history' element={<History />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App