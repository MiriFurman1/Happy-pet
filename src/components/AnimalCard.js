import { Link } from "react-router-dom"
export function AnimalCard({animal,token}) {

    return (
        <div className="animalCard" >
            <Link to={`/${animal.id}`} state={{animal,token}}>
                <h3>{animal.name}</h3>
                {animal.photos[0] && <img alt="" src={animal.photos[0].medium}></img>}
                {!animal.photos[0] && <img alt="" src="/animals/imageNotFound.png"></img>}
            </Link>
        </div>
    )

}