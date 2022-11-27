
import './style/App.css'
import './style/home.css'
import './style/about.css'
import './style/animalPage.css'
import './style/sign.css'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import E404 from './pages/E404';
import Signup from './users/Signup';
import Login from './users/Login';
import AnimalPage from './pages/AnimalPage'
import { AuthProvider } from "./contexts/AuthContext"
import ForgotPassword from './users/ForgotPassword'
import UpdateProfile from './users/UpdateProfile'
import PrivateRoute from './PrivateRoute'
import { useState } from "react"


function App() {
  const [animalType, setAnimalType] = useState("")

  return (
    <div className="App">

      <AuthProvider>
        <Navbar setAnimalType={setAnimalType}/>
        <Routes>
          <Route exact path='/' element={<Home animalType={animalType} setAnimalType={setAnimalType}/>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/:animalId' element={<AnimalPage />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/update-profile'
            element={<PrivateRoute>
              <UpdateProfile />
            </PrivateRoute>} />
          <Route path='*' element={<E404 />} />
        </Routes>


      </AuthProvider>
    </div>
  );
}

export default App;
