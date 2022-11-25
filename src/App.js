
import './style/App.css'
import './style/home.css'
import './style/about.css'
import './style/animalPage.css'
import './style/sign.css'
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { Routes, Route} from 'react-router-dom';
import { About } from './pages/About';
import { E404 } from './pages/E404';
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import {AnimalPage} from './pages/AnimalPage'


function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/:animalId' element={<AnimalPage />}/>
        <Route path='*' element={<E404 />} />
      </Routes>


    </div>
  );
}

export default App;
