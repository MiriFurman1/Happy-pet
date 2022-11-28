
import axios from 'axios'
import { useEffect } from 'react'
export function GetSearchData({ token, setAnimals, animalType, selectedBreed, state, setIsLoading, setStartSearch }) {

    useEffect(() => {
        setIsLoading(true)

        if (token) {
            const authAxios = axios.create({
                baseURL: 'https://api.petfinder.com/v2',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const getData = async () => {
                try {
                    const locationsString = state ? `&location=${state}` : ""
                    const data = await authAxios.get(`/animals?type=${animalType}&breed=${selectedBreed}${locationsString}&page=1`)
                    setAnimals(prev => data.data.animals)
                    setIsLoading(false)
                    setStartSearch(false)
                    console.log("search");
                }
                catch (e) {
                    console.log(e);
                    setStartSearch(false)

                }
            }
            getData()

        }

    }, [token, setAnimals, setIsLoading, animalType, selectedBreed, setStartSearch, state])
}
