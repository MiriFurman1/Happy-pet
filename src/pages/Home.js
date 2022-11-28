import { AnimalCard } from "../components/AnimalCard"
import { GetData } from "../components/GetData"
import { useState } from "react"
import GetToken from "../components/GetToken"
import GetDataForAnimals from "../components/GetDataForAnimals"
import { Link } from "react-router-dom"

export default function Home({ animalType, setAnimalType }) {
    const [animals, setAnimals] = useState([])
    const [token, setToken] = useState("")
    const [isLoading, setIsLoading] = useState(false)



    function clickHandle(e) {
        setAnimalType("")
        console.log(e.target.className);
        if (e.target.className === "all") {
            setAnimalType("")
        }
        else {
            setAnimalType(e.target.className)
        }

    }
    return (

        <div className="homePage">
            <img alt="" src="/animals/happy pet logo.png" width="300px"></img>


            <h1>What type of animal are you looking for?</h1>
            <div className="homepageMiddleDiv">
                <div className="animalIcons">

                    <img alt="" src="/animals/cat-icon.png" width="64px" onClick={clickHandle} className="cat"></img>
                    <img alt="" src="/animals/dog-icon.png" className="dog" onClick={clickHandle}></img>
                    <img alt="" src="/animals/rabbit-icon.png" width="64px" className="rabbit" onClick={clickHandle}></img>
                    <img alt="" src="/animals/bird-icon.png" className="bird" onClick={clickHandle}></img>
                    <img alt="" src="/animals/horse-icon.png" className="horse" onClick={clickHandle}></img>
                    <img alt="" src="/animals/hamster-icon.png" width="64px" className="Small-Furry" onClick={clickHandle}></img>
                    <img alt="" src="/animals/fish-icon.png" width="64px" className="Scales-Fins-Other" onClick={clickHandle}></img>
                    <img alt="" src="/animals/all-icon.png" className="all" onClick={clickHandle}></img>
                </div>

                <div className="searchDiv">
                    <h2>Advanced Search</h2>
                    <Link to="/search" state={{ token }}>
                        <img alt="" src="/animals/search-icon.png"></img>
                    </Link>
                </div>


            </div>
            <div className="h2Div">
                <h2>Pets available for adoption:  </h2>
                <h2>{animalType}</h2>
            </div>
            {isLoading && <div className="lds-heart"><div></div></div>}
            <GetToken setToken={setToken} />
            {(token && !animalType) && <GetData setAnimals={setAnimals} setIsLoading={setIsLoading} token={token} />}
            {animalType && <GetDataForAnimals setAnimals={setAnimals} setIsLoading={setIsLoading} token={token} animalType={animalType} />}
            <div className="animalCardDiv">

                {animals?.map((animal) => {
                    return <AnimalCard animal={animal} key={animal.id} token={token} />
                })}


            </div>
            {(token && !isLoading) && <button>Next Page</button>}
        </div>
    )
}