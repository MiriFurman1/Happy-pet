import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link,useNavigate } from "react-router-dom"

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup} = useAuth()
    const [error, setError] = useState('')
    const [loading,setLoading]=useState(false)
    const navigate=useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("passwords do not match")
        }
        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate("/")
        } catch(e){
            console.log(e)
            setError('Failed to create an account')
        }
setLoading(false)
    }

    return (
        <div className="signupPage">
            
            
            <form onSubmit={handleSubmit}>
            <h1>Sign up</h1>
                <label htmlFor="email" >Email</label>
                <input name="email" type={"email"} required ref={emailRef}></input>
                <label htmlFor="password" >Password</label>
                <input name="password" type={"password"} required ref={passwordRef}></input>
                <label htmlFor="password" >Password Confirmation</label>
                <input name="passwordConfirm" type={"password"} required ref={passwordConfirmRef}></input>
                <button disabled={loading} type={"submit"} >Sign Up</button>
                <h4>Password must be at least 6 digits</h4>
                <h3>Already have an account? <Link to="/login">Log in</Link></h3>
                {error&&<h4>{error}</h4>}
            </form>
        </div>
    )
}