import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import SideBar from "./SideBar"


export default function Navbar({ setAnimalType, token }) {
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const currentUser = useAuth()
    const { logout } = useAuth()

    async function handleLogout() {
        setError("")
        try {
            await logout()
            navigate("/")
        } catch {
            setError("Failed to logout")
            console.log(error);
        }
    }

    function homeClickHandle() {
        setAnimalType("")
    }
    return (
        <nav>
            <SideBar setAnimalType={setAnimalType} token={token} handleLogout={handleLogout} />

            <div className="logo"><Link to='/' onClick={homeClickHandle} ><h1 >Happy Pet</h1></Link></div>

            <div className="navbarButtons">
                <div className="buttonsDiv">
                    <Link to='/' onClick={homeClickHandle}>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to="/search" state={{ token }}>Search</Link>

                </div>

                {currentUser.currentUser !== null ?
                    (<div className="buttonsDiv"> 
                        <Link to='/adoption-requests' state={{ token }}>Adoption Requests</Link>
                        <Link to="/update-profile">Update profile</Link>
                        <button onClick={handleLogout}>Logout</button>
                        {currentUser.currentUser.email}
                    </div>
                    ) : (
                        <div className="buttonsDiv">
                            <Link to='login/'>Login</Link>
                            <Link to='signup/'>Sign up</Link>
                        </div>
                    )}

            </div>

        </nav>


    )
}