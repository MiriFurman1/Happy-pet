
import './style/App.css'
import './style/home.css'
import './style/about.css'
import './style/animalPage.css'
import './style/form.css'
import './style/searchPage.css'
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
import AdoptionForm from './pages/AdoptionForm'
import Footer from './components/Footer'
import SearchPage from './pages/SearchPage'
import GetToken from './components/GetToken'

function App() {
  const [animalType, setAnimalType] = useState("")
  const [token, setToken] = useState("")
  
  return (
    <div className="App">

      <AuthProvider>
      <GetToken setToken={setToken} />
        <Navbar setAnimalType={setAnimalType} />
        <Routes>
          <Route exact path='/' element={<Home animalType={animalType} setAnimalType={setAnimalType} token={token}/>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/:animalId' element={<AnimalPage />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/adoption-form' element={<AdoptionForm />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/update-profile'
            element={<PrivateRoute>
              <UpdateProfile />
            </PrivateRoute>} />
          <Route path='*' element={<E404 />} />
        </Routes>
        <Footer />

      </AuthProvider>
    </div>
  );
}

export default App;
