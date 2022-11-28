import React from 'react'
import { useAuth } from "../contexts/AuthContext"
import { useLocation } from "react-router";
import { Navigate } from 'react-router';
import { useState } from 'react';
export default function AdoptionForm() {
    const currentUser = useAuth()
    const location = useLocation();
    const animal = location.state.currentAnimal;
    const [formSubmitted,setFormSubmitted ]=useState(false)
    

    function handleSubmit(e) {
        e.preventDefault()
        setFormSubmitted(true)
    }
    return (
        <div className='adoptionPage'>
            {currentUser.currentUser !== null ? (<form onSubmit={handleSubmit}>
                <h1>This is an adoption  application </h1>
                <h3>After filling this form the organization will get back to you</h3>
                <h3>You want to adopt: </h3>
                <h3>A {animal.gender} {animal.species} named {animal.name} who is located in {animal.contact.address.city} {animal.contact.address.state}</h3>
                <label htmlFor='firstName'>First Name</label>
                <input name="firstName" type="text" required></input>
                <label htmlFor='phone'>Phone Number</label>
                <input name="phone" type="number" required></input>
                <label htmlFor='match'>why do you think {animal.name} is the right match for you? </label>
                <input name="match" type="text" required></input>
                <label htmlFor='livingConditions'>where {animal.name} will live? (indoors/outdoors etc..)</label>
                <input name="livingConditions" type="text" required></input>
                <label htmlFor='moreInfo'>Anything else we should know about?(kids, other animals)</label>
                <input name="moreInfo" type="text" ></input>
                <button type="submit">Send Form</button>

            </form>) : (
                <div>
                    <h1>Opps...</h1>
                    <h2>You need to be logged in to send adoption applications</h2>
                    <img alt="" src='/animals/Pink Simple Creative Pet Shop Flyer.png' height="600px"></img>
                </div>
            )}
            {formSubmitted&&<Navigate to="/" state={formSubmitted}/>}

        </div>
    )
}
