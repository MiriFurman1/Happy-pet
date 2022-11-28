
import axios from 'axios'
import { useEffect } from 'react'
export default function GetAnimalDataById({animalId,setIsLoading,token,setCurrentAnimal}) {

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
                    const data = await authAxios.get(`/animals/${animalId}`)
                    console.log(data.data.animal);
                    setCurrentAnimal( data.data.animal)
                    setIsLoading(false)
                }
                catch (e) {
                    console.log(e);
                }
            }
            getData()
            
        }
        
    }, [token,setIsLoading,animalId,setCurrentAnimal])
}
