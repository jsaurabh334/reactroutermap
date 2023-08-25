import Navbar from './Navbar'
import Home from './components/Home'
import About from './components/About'
import Err from './components/Err'
import "./App.css"
import { BrowserRouter as BR,Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    <BR>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='*' element={<Err/>}/>
    </Routes>
    </BR>
  )
}

export default App;