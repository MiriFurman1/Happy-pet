
import axios from 'axios'
import { useEffect } from 'react'
export function GetSearchData({ token, setAnimals, animalType, selectedBreed, state, setIsLoading, 
    setStartSearch,selectedAge, currentPage,setLastPage}) {

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
                    const ageString=selectedAge?`&age=${selectedAge}`:""
                    const data = await authAxios.get(`/animals?type=${animalType}&breed=${selectedBreed}${locationsString}${ageString}&page=${currentPage}`)
                    setAnimals(prev => data.data.animals)
                    setLastPage(prev=>data.data.pagination.total_pages)
                    setIsLoading(false)
                    setStartSearch(false)
                }
                catch (e) {
                    console.log(e);
                    setStartSearch(false)

                }
            }
            getData()

        }

    }, [token, setAnimals, setIsLoading, animalType, selectedBreed, setStartSearch, state,selectedAge,currentPage,setLastPage])
}
