import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
export default function Navbar() {
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
        }
    }
    return (
        <nav>
            <Link to='/'><h1>Happy Pet</h1></Link>
            <div className="buttonsDiv">
                <Link to='/'>Home</Link>
                <Link to='about/'>about</Link>
                </div>

                {currentUser.currentUser!==null? 
                (<div className="buttonsDiv"> {currentUser.currentUser.email}
                    <Link to="/update-profile">update profile</Link>
                    <button onClick={handleLogout}>Logout</button>
                </div>
                ):(
                    <div className="buttonsDiv"> 
                <Link to='login/'>Login</Link>
                <Link to='signup/'>Signup</Link>
                    </div>
                )}
                
                
            
        </nav>
    )
}