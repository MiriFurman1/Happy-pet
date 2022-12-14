import { useLocation } from "react-router";
import { useState,useEffect } from "react";
import GetAnimalDataById from "../components/GetAnimalDataById"
import { Link } from "react-router-dom";
import axios from "axios";
export default function AnimalPage() {

    const location = useLocation();
    const animal = location.state.animal;
    const token = location.state.token;
    const animalId = animal.id
    const [currentAnimal, setCurrentAnimal] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [requests,setRequests]=useState([])
    const [requestsForCurrentAnimal,setRequestsForCurrentAnimal]=useState([])

    useEffect(() => {
        async function getData() {
            try {

                let data = await axios.get("https://637389a9348e9472990f6169.mockapi.io/adoptionAplications")
                setRequests(await data.data)

            } catch (e) {
                console.log(e);
            }
        }
        getData()
    }, [])

    useEffect(() => {
        async function filterData() {
            setRequestsForCurrentAnimal(
                requests.filter((request) => {
                    return request.animalID === animalId
                })
            )
        }
        filterData()
    }, [animalId,requests,setRequestsForCurrentAnimal])
    return (
        <div className="animalPage" key={currentAnimal.id}>
            {isLoading && <div className="lds-heart"><div></div></div>}
            {!currentAnimal && <GetAnimalDataById animalId={animalId} setIsLoading={setIsLoading} token={token} setCurrentAnimal={setCurrentAnimal} />}
            {currentAnimal && (<div className="allDiv">
                <h2>{currentAnimal.name}</h2>
                <div className="imagesDiv">
                    {currentAnimal.photos[0] && <img alt="" src={animal.photos[0].large}></img>}
                    {currentAnimal.photos[1] && <img alt="" src={animal.photos[1].large}></img>}
                    {currentAnimal.photos[2] && <img alt="" src={animal.photos[2].large}></img>}
                    {!currentAnimal.photos[0] && <img alt="" src="/animals/imageNotFound.png"></img>}
                </div>

                <div className="animalInfo">
                    <h3>Type: {currentAnimal.type}</h3>
                    <h3>Gender: {currentAnimal.gender}</h3>
                    <h3>Age: {currentAnimal.age}</h3>
                    {currentAnimal.colors.primary && <h3>Color:{currentAnimal.colors.primary}</h3>}
                    {currentAnimal.coat && <h3>Coat:{currentAnimal.coat}</h3>}
                    <h3>Breed: {currentAnimal.breeds.primary}</h3>
                    <h3>Location: {currentAnimal.contact.address.city} {currentAnimal.contact.address.state} {currentAnimal.contact.address.country}</h3>
                    {currentAnimal.description && <h3>Description: {currentAnimal.description}</h3>}
                    {requestsForCurrentAnimal&&<h3>Requests for adoption: {requestsForCurrentAnimal.length}</h3>}
                    {currentAnimal.tags.length !== 0 && <h3 style={{ color: "#263C65" }}>Tags:</h3>}{currentAnimal.tags.map((tag) => {
                        return <span>{tag} </span>
                    })} <br />

                   
                </div>
                <Link to="/adoption-form" state={{ currentAnimal }}><button class="btn-55"><span>I Want To Adopt {currentAnimal.name}</span></button></Link>
                
            </div>)
            }

        </div>
    )
}