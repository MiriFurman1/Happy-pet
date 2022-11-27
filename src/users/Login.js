import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate} from "react-router-dom"

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading,setLoading]=useState(false)
    const navigate=useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/")
        } catch{
            setError('Failed to login')
        }
setLoading(false)
    }

    return (
        <div className="loginPage">

            
            <form onSubmit={handleSubmit}>
            <h1>Login</h1>
                <label htmlFor="email" >Email</label>
                <input name="email" type={"email"} required ref={emailRef}></input>
                <label htmlFor="password" >Password</label>
                <input name="password" type={"password"} required ref={passwordRef}></input>
                <button disabled={loading} type={"submit"} >Login</button>
                <h4>Password must be at least 6 digits</h4>
                <h3>Already have an account? <Link to="/signup">Sign up</Link></h3>
                <Link to="/forgot-password">Forgot Password?</Link>
                {error&&<h4>{error}</h4>}
            </form>
        </div>
    )
}