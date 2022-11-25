import { Link } from "react-router-dom"
export function AnimalCard(animal) {
    let animalObject = animal.animal
    return (
        <div className="animalCard" >
            <Link to={`/${animalObject.id}`} state={animalObject}>
                <h3>{animalObject.name}</h3>
                {animalObject.photos[0] && <img alt="" src={animalObject.photos[0].medium}></img>}
                {!animalObject.photos[0] && <img alt="" src="/animals/imageNotFound.png"></img>}
            </Link>
        </div>
    )

}