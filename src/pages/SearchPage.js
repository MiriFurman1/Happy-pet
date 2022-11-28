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
    

    let breedOptions = ""

    function handleSubmit(e) {
        e.preventDefault()
        setStartSearch(true)
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

    function handleStateChange(e) {
        console.log(e.target.value);
        setState(e.target.value)
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
                </select>

                <GetAnimalBreeds token={token} setBreeds={setBreeds} animalType={animalType} setIsLoading={setIsLoading} state={state} />
                <label>Animal Breed</label>
                <select id="animalType" onChange={handleBreedSelect}>
                    <option value="" >Show all animals of this type</option>
                    {breeds ? breedOptions : ""}
                </select>

                <label htmlFor='state'>State </label>
                <input name="state" onChange={handleStateChange}></input>


                <button type='submit'>Search</button>
            </form>

            {startSearch && <GetSearchData token={token} setAnimals={setAnimals} animalType={animalType} selectedBreed={selectedBreed} setIsLoading={setIsLoading} setStartSearch={setStartSearch} state={state} />}

            {((animals.length === 0 && animals !== "") && !isLoading) ? <h2>Animals that fit this description were  not found</h2> : ""}

            {isLoading && <div className="lds-heart"><div></div></div>}
            <div className='animalCardDiv'>
                {animals !== "" && animals.map((animal) => {
                    return <AnimalCard animal={animal} key={animal.id} token={token} />
                })}

            </div>
        </div>
    )
}
