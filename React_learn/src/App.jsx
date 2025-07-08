import './css/App.css'
import Movie from './components/Movie'
import Home from './pages/Home'
import Favs from './pages/Favs'
import Nav from './components/Nav'
import { Movprov } from './contexts/Moviecont'
import {Route,Routes} from "react-router-dom"

function App() {


  return (

    <Movprov>  
    <Nav /> 
    <main className='main-content'>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/favs" element={< Favs />} />
      </Routes>
    </main>  
      
      </Movprov>

  )
}

export default App