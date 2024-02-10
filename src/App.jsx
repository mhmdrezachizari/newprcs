import { useEffect, useState } from 'react'
import './App.css'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import { Myprovider } from './context/Mycontext'
import Shopping from './pages/shopping'
import Nacbre from './pages/Nacbre'
import Pricing from './pages/pricing'
import Features from './pages/features'

function App() {
  const [count, setCount] = useState([])

  return (
    <>
    <Myprovider>
    <Router>
    <Nacbre/>
      <Routes>
        <Route path='/' element={<Shopping/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/features' element={<Features/>}/>
      </Routes>
    </Router>
    </Myprovider>
    </>
  )
}

export default App
