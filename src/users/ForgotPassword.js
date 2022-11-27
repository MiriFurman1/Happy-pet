import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link} from "react-router-dom"

export default function ForgotPassword() {
    const emailRef = useRef()
    const {resetPassword}=useAuth()
    const [error, setError] = useState('')
    const [loading,setLoading]=useState(false)
    const [message,setMessage]=useState("")
    async function handleSubmit(e) {
        e.preventDefault()

        try{
            setMessage("")
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("check your inbox for further instructions")
        } catch{
            setError('Failed to reset password')
        }
setLoading(false)
    }

    return (
        <div className="passwordPage">

            
            <form onSubmit={handleSubmit}>
            <h1>Password reset</h1>
            
                <label htmlFor="email" >Email</label>
                <input name="email" type={"email"} required ref={emailRef}></input>
                <button disabled={loading} type={"submit"} >Reset Password</button>
                <button><Link to="/login">Login</Link></button>
                <h3>Need an account?<Link to="/signup">Sign up</Link></h3>
                {message&&<h3>{message}</h3>}
                {error&&<h4>{error}</h4>}
            </form>
        </div>
    )
}