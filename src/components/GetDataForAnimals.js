
import { useEffect } from 'react'
import axios from 'axios'
export default function GetDataForAnimals({setIsLoading,token,animalType,setAnimals}) {

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
                    const data = await authAxios.get(`/animals?type=${animalType}`)
                    console.log(data);
                    setAnimals(prev=>data.data.animals)
                    setIsLoading(false)
                }
                catch (e) {
                    console.log(e);
                }
            }
            getData()
            
        }
        
    }, [token,setAnimals,setIsLoading,animalType])
}
