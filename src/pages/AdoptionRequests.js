import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

export default function AdoptionRequests() {
    const location = useLocation();
    const token = location.state.token;
    const [requests, setRequests] = useState([])
    const [currentUserRequests, setCurrentUserRequests] = useState([])
    const currentUser = useAuth();


    useEffect(() => {
        async function getData() {
            try {

                let data = await axios.get("https://637389a9348e9472990f6169.mockapi.io/adoptionAplications")
                console.log(data.data);
                setRequests(await data.data)

            } catch (e) {
                console.log(e);
            }
        }
        getData()
    }, [])

    useEffect(() => {
        async function filterData() {
            setCurrentUserRequests(
                requests.filter((request) => {
                    return request.userEmail === currentUser.currentUser.email
                })
            )
        }
        filterData()
    }, [requests, currentUser.currentUser.email])




    return (
        <div className='adoptionRequestsPage'>
            <h1> My Adoption Requests</h1>
            <div className='requestsDiv'>
                {currentUserRequests.length!==0 ? currentUserRequests.map((request) => {
                    let animal = request.animal
                    console.log(animal);
                    return (
                        <Link to={`/${animal.id}`} state={{ animal, token }}>
                            <div key={request.animalID} className="request">
                                <h2 style={{ color: "#5C6A89" }}>{animal.name}</h2>
                                {animal.photos[0] && <img alt="" src={animal.photos[0].medium}></img>}
                                {!animal.photos[0] && <img alt="" src="/animals/imageNotFound.png"></img>}
                                <h3>My request:</h3>
                                <h4>Name: {request.userName}</h4>
                                <h4>Phone Number: {request.phoneNumber}</h4>
                                <h4 style={{ color: "#5C6A89" }}>Why do you think {animal.name} is the right match for you? </h4>
                                <h4>{request.whyYouFitToAdopt}</h4>
                                <h4 style={{ color: "#5C6A89" }}>Where {animal.name} will live? </h4>
                                <h4>{request.livingConditions}</h4>
                                {request.moreInfo&&<div> 
                                <h4 style={{ color: "#5C6A89" }}>Anything else we should know about?</h4>
                                <h4> {request.moreInfo}</h4>
                                </div>}
                                
                            </div>
                        </Link>
                    )
                }) : (<h2>No requests found for this user</h2>)}
            </div>
        </div>
    )
}
