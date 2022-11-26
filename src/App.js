
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
import Signup from './pages/Signup';
import Login from './pages/Login';
import AnimalPage from './pages/AnimalPage'
import { AuthProvider } from "./contexts/AuthContext"
import ForgotPassword from './pages/ForgotPassword'
import UpdateProfile from './pages/UpdateProfile'
import PrivateRoute from './PrivateRoute'


function App() {


  return (
    <div className="App">

      <AuthProvider>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
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
