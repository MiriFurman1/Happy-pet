import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, Navigate} from "react-router-dom"

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword, updateEmail } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [updated,setUpdated]=useState(false)
    // const {login} = useAuth()



    function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("passwords do not match")
        }
        const promises = []
        setError('')
        setLoading(true)

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            // if(emailRef.current.value !== currentUser.email){
            //     promises.push(login(emailRef.current.value, passwordRef.current.value))
            // }
            promises.push(updatePassword(passwordRef.current.value))
        }

        console.log(promises);
        Promise.all(promises)
            .then(() => {
                setUpdated(true)
            })
            .catch((e) => {
                console.log(e);
                setError("Failed to update account, if too long has passed since logging in, try log in again")

            })
            .finally(() => {
                setLoading(false)

            })
    }

    return (
        <div className="loginPage">


            <form onSubmit={handleSubmit}>
                <h1>Update profile</h1>
                <label htmlFor="email" >Email</label>
                <input name="email" type={"email"} required ref={emailRef} defaultValue={currentUser.email}></input>
                <label htmlFor="password" >Password</label>
                <input name="password" type={"password"} ref={passwordRef} placeholder="leave blank to keep the same"></input>
                <label htmlFor="passwordConfirm" >Password Confirmation</label>
                <input name="passwordConfirm" type={"password"} ref={passwordConfirmRef} placeholder="leave blank to keep the same"></input>
                <button disabled={loading} type={"submit"} >Update</button>
                <h4>Password must be at least 6 digits</h4>
                <button> <Link to="/">Cancel</Link></button>
                <Link to="/forgot-password">Forgot Password?</Link>
                {error && <h4>{error}</h4>}
                {updated&&<h4>user updated successfully</h4>}
                {updated&&<Navigate to="/" />}
            </form>
        </div>
    )
}