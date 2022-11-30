import React, { useEffect } from 'react'
import { useAuth } from "../contexts/AuthContext"
import { useLocation } from "react-router";
import { Navigate } from 'react-router';
import { useState } from 'react';
import axios from 'axios';

function SaveAdoptionFormData({info}) {
    useEffect(() => {
        async function postData() {
            var config = {
                method: 'post',
                url: 'https://637389a9348e9472990f6169.mockapi.io/adoptionAplications',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: info
            };

            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        postData()
    },[info])
}

export default function AdoptionForm() {
    const currentUser = useAuth()
    const location = useLocation();
    const animal = location.state.currentAnimal;
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [info, setInfo] = useState({
        animalID: "",
        userName: "",
        userEmail: "",
        phoneNumber: "",
        whyYouFitToAdopt: "",
        livingConditions: "",
        moreInfo: "",
        animal:""
    })

    function changeHandle(e) {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })

    }

    function handleSubmit(e) {
        e.preventDefault()
        setInfo({
            ...info,
            animalID: animal.id,
            userEmail: currentUser.currentUser.email,
            animal:animal
        })

        setFormSubmitted(true)
    }
    return (
        <div className='adoptionPage'>
            {currentUser.currentUser !== null ? (<form onSubmit={handleSubmit}>
                <h1>This is an adoption  application </h1>
                <h3>After filling this form the organization will get back to you</h3>
                <h3>You want to adopt: </h3>
                <h3>A {animal.gender} {animal.species} named {animal.name} who is located in {animal.contact.address.city} {animal.contact.address.state}</h3>
                <label htmlFor='UserName'>First Name</label>
                <input name="userName" type="text" required onChange={changeHandle}></input>
                <label htmlFor='phoneNumber'>Phone Number</label>
                <input name="phoneNumber" type="number" required onChange={changeHandle}></input>
                <label htmlFor='whyYouFitToAdopt'>Why do you think {animal.name} is the right match for you? </label>
                <input name="whyYouFitToAdopt" type="text" required onChange={changeHandle}></input>
                <label htmlFor='livingConditions'>Where {animal.name} will live? (indoors/outdoors etc..)</label>
                <input name="livingConditions" type="text" required onChange={changeHandle}></input>
                <label htmlFor='moreInfo'>Anything else we should know about?(kids, other animals)</label>
                <input name="moreInfo" type="text" onChange={changeHandle} ></input>
                <button type="submit">Send Form</button>

            </form>) : (
                <div>
                    <h1>Oops...</h1>
                    <h2>You need to be logged in to send adoption applications</h2>
                    <img alt="" src='/animals/Pink Simple Creative Pet Shop Flyer.png' height="600px"></img>
                </div>
            )}
            {formSubmitted&&<SaveAdoptionFormData info={info}/>}
            {formSubmitted && <Navigate to="/" state={formSubmitted} />}

        </div>
    )
}
