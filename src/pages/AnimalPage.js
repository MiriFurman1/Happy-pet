import { useLocation } from "react-router";
export function AnimalPage() {
    const location = useLocation();
    const animal = location.state;
    console.log(animal);

    return (
        <div className="animalPage">
            <h2>{animal.name}</h2>
            {animal.photos[0] && <img alt="" src={animal.photos[0].large}></img>}
            {animal.photos[1] && <img alt="" src={animal.photos[1].large}></img>}
            {!animal.photos[0] && <img alt="" src="/animals/imageNotFound.png"></img>}
            <h3>Type:{animal.type}</h3>
            <h3>Gender:{animal.gender}</h3>
            <h3>Age:{animal.age}</h3>
            <h3>Breed:{animal.breeds.primary}</h3>
            <h3>location:{animal.contact.address.city} {animal.contact.address.state} {animal.contact.address.country}</h3>
            {/* <h3>spayed/neutered:{animal.attributes.spayed_neutered}</h3> */}
            {animal.description&&<h3>description:{animal.description}</h3>}
        </div>
    )
}