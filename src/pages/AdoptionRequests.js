import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
export default function AdoptionRequests() {
    useEffect(() => {
        async function getData() {
// try{

//     await axios.get("https://637389a9348e9472990f6169.mockapi.io/adoptionAplications")
// }catch{

// }

 axios.get("https://637389a9348e9472990f6169.mockapi.io/adoptionAplications")
                .then(function (response) {
                    JSON.stringify(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });

        }
        getData()
    }, [])
    return (
        <div>AdoptionRequests</div>
    )
}
