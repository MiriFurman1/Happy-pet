import { AnimalCard } from "../components/AnimalCard"
import { GetData } from "../components/GetData"
import { useState } from "react"

export default function Home() {
    const [animals,setAnimals]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    return (

        <div className="homePage">
            <img alt="" src="/animals/happy pet logo.png" width="300px"></img>
            <h1>What type of animal are you looking for?</h1>
            <img alt="" src="/animals/cat-icon.png" width="64px"></img>
            <img alt="" src="/animals/dog-icon.png"></img>
            <img alt="" src="/animals/rabbit-icon.png" width="64px"></img>
            <img alt="" src="/animals/bird-icon.png"></img>
            <GetData setAnimals={setAnimals} setIsLoading={setIsLoading}/>
            <h3>pets available for adoption </h3>
            <div className="animalCardDiv">
            {isLoading?(<h1>loading</h1>):
            (animals?.map((animal)=>{
                return <AnimalCard animal={animal} key={animal.id}/>
            }))}

            
            </div>
        </div>
    )
}