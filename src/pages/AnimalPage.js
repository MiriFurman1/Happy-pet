import { useLocation } from "react-router";
import { useState } from "react";
import GetAnimalDataById from "../components/GetAnimalDataById"
export default function AnimalPage() {
    const location = useLocation();
    const animal = location.state.animal;
    const token = location.state.token
    const animalId = animal.id

    const [currentAnimal, setCurrentAnimal] = useState("")
    const [isLoading, setIsLoading] = useState(false)



    return (
        <div className="animalPage">
            {isLoading && <div className="lds-heart"><div></div></div>}
            {!currentAnimal&&<GetAnimalDataById animalId={animalId} setIsLoading={setIsLoading} token={token} setCurrentAnimal={setCurrentAnimal} />}
            {currentAnimal && (<div>
                <h2>{currentAnimal.name}</h2>
                {currentAnimal.photos[0] && <img alt="" src={animal.photos[0].large}></img>}
                {currentAnimal.photos[1] && <img alt="" src={animal.photos[1].large}></img>}
                {!currentAnimal.photos[0]&& <img alt="" src="/animals/imageNotFound.png"></img>}
                <h3>Type: {currentAnimal.type}</h3>
                <h3>Gender: {currentAnimal.gender}</h3>
                <h3>Age: {currentAnimal.age}</h3>
                <h3>Breed: {currentAnimal.breeds.primary}</h3>
                <h3>Location: {currentAnimal.contact.address.city} {currentAnimal.contact.address.state} {currentAnimal.contact.address.country}</h3>
                {currentAnimal.description && <h3>Description: {currentAnimal.description}</h3>}

                <button>I Want To Adopt {currentAnimal.name} !</button>
            </div>)
            }

        </div>
    )
}