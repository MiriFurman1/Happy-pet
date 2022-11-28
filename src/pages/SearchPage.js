import React from 'react'
import { useState } from 'react';
import { GetAnimalBreeds } from '../components/GetAnimalBreeds';
import { useLocation } from 'react-router';
import { GetSearchData } from '../components/GetSearchData';
import { AnimalCard } from '../components/AnimalCard';

export default function SearchPage() {
    const location = useLocation();
    const token = location.state.token;
    const [animalType, setAnimalType] = useState("cat")
    const [breeds, setBreeds] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [state, setState] = useState("")
    const [startSearch, setStartSearch] = useState(false)
    const [animals, setAnimals] = useState("")
    const [selectedBreed, setSelectedBreed] = useState("")
    const [selectedAge, setSelectedAge] = useState("")
    const [currentPage,setCurrentPage]=useState(1)
    const [showPageButtons,setShowPageButtons]=useState(false)

    let breedOptions = ""

    function handleSubmit(e) {
        e.preventDefault()
        setCurrentPage(prev=>1)
        setStartSearch(true)
        setShowPageButtons(true)
    }

    function handleSelect(e) {
        console.log(e.target.value);
        setAnimalType(e.target.value)
    }
    function handleBreedSelect(e) {
        console.log(e.target.value);
        setSelectedBreed(e.target.value)
    }

    function breedOptionsMaker() {

        if (breeds) {
            breedOptions = breeds.map((breed) => {
                return <option value={breed.name} key={breed.name}>{breed.name}</option>
            })
        }
    }
    breedOptionsMaker()

    function handleAgeSelect(e) {
        console.log(e.target.value);
        setSelectedAge(e.target.value)
    }

    function handleStateChange(e) {
        console.log(e.target.value);
        setState(e.target.value)
    }

    function handleNextPage(){
        setCurrentPage(prev=>prev+1)
        setStartSearch(true)
    }
    function handlePreviousPage(){
        setCurrentPage(prev=>prev-1)
        setStartSearch(true)
    }

    return (
        <div className='searchPage'>

            <form id="animalSearch" onSubmit={handleSubmit}>
                <h1>Advanced Search</h1>
                <label>Animal Type</label>
                <select id="animalType" onChange={handleSelect}>
                    <option value="cat">Cats</option>
                    <option value="dog">Dogs</option>
                    <option value="rabbit">Rabbit</option>
                    <option value="horse">Horse</option>
                    <option value="Small-Furry">Small and Furry animals</option>
                    <option value="Scales-Fins-Other">Fish, turtles and others</option>
                    <option value="Barnyard">Barnyard</option>
                </select>

                <GetAnimalBreeds token={token} setBreeds={setBreeds} animalType={animalType} setIsLoading={setIsLoading} />
                <label>Animal Breed</label>
                <select id="animalType" onChange={handleBreedSelect}>
                    <option value="" >Show all animals of this type</option>
                    {breeds ? breedOptions : ""}
                </select>

                <label>Age</label>
                <select id="animalAge" onChange={handleAgeSelect}>
                    <option value="" >All</option>
                    <option value="baby">Baby</option>
                    <option value="young">Young</option>
                    <option value="adult">Adult</option>
                    <option value="senior">Senior</option>
                </select>

                <label htmlFor='state'>State </label>
                <input name="state" onChange={handleStateChange}></input>



                <button type='submit'>Search</button>
            </form>

            {startSearch && <GetSearchData token={token} setAnimals={setAnimals} animalType={animalType} selectedBreed={selectedBreed} selectedAge={selectedAge} setIsLoading={setIsLoading} setStartSearch={setStartSearch} state={state} currentPage={currentPage}/>}

            {((animals.length === 0 && animals !== "") && !isLoading) ? <h2>Animals that fit this description were  not found</h2> : ""}

            {isLoading && <div className="lds-heart"><div></div></div>}
            <div className='animalCardDiv'>
                {animals !== "" && animals.map((animal) => {
                    return <AnimalCard animal={animal} key={animal.id} token={token} />
                })}
            </div>
            
            <div>
            {currentPage!==1&&showPageButtons && <button onClick={handlePreviousPage}>Previous Page</button>}
            {showPageButtons && <button onClick={handleNextPage}>Next Page</button>}
            </div>
            {showPageButtons&&<h4>Page {currentPage}</h4>}
        </div>
    )
}
