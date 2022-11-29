import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, Navigate } from "react-router-dom"

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword, updateEmail, deleteUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [updated, setUpdated] = useState(false)
    const [userDeleted, setUserDeleted] = useState(false)


    function handleDelete() {
        setUserDeleted(true)
        deleteUser().then(() => {
            
            alert("user deleted successfully")
        }).catch((e) => {
            console.log(e);
            alert("Failed to delete user")
        })
    }




    async function handleSubmit(e) {
        try {
            e.preventDefault()
            if (passwordRef.current.value !== passwordConfirmRef.current.value) {
                return setError("passwords do not match")
            }
            setError('')
            setLoading(true)
            if (emailRef.current.value !== currentUser.email) {
                await updateEmail(emailRef.current.value)
            }
            if (passwordRef.current.value) {
                await updatePassword(passwordRef.current.value)
            }
                setUpdated(true)
                if(!userDeleted){
                    alert("user updated successfully")
                }
                setLoading(false)
        }
        catch {
            console.log(e);
            alert("Failed to update account, if too long has passed since logging in, try log in again")
            setLoading(false)
        }
    }



    return (
        <div className="updateProfilePage">


            <form onSubmit={handleSubmit}>
                <h1>Update profile</h1>
                <label htmlFor="email" >Email</label>
                <input name="email" type={"email"} required ref={emailRef} defaultValue={currentUser.email}></input>
                <label htmlFor="password" >Password</label>
                <input name="password" type={"password"} ref={passwordRef} placeholder="leave blank to keep the same"></input>
                <label htmlFor="passwordConfirm" >Password Confirmation</label>
                <input name="passwordConfirm" type={"password"} ref={passwordConfirmRef} placeholder="leave blank to keep the same"></input>
                <div>
                    <button disabled={loading} type={"submit"}>Update</button>
                    <button disabled={loading} onClick={handleDelete}>Delete User</button>
                </div>
                <h4>Password must be at least 6 digits</h4>
                <button> <Link to="/">Cancel</Link></button>
                <Link to="/forgot-password">Forgot Password?</Link>

                {error && <h5>{error}</h5>}
                {(updated || userDeleted) && <Navigate to="/" />}
            </form>
        </div>
    )
}