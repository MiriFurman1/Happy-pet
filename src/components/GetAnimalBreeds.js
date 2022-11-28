import { useEffect} from "react";
import axios from "axios";

export function GetAnimalBreeds({animalType,setBreeds,setIsLoading,token}) {

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
                    const data = await authAxios.get(`/types/${animalType}/breeds`)
                    console.log(data.data.breeds);
                    setBreeds(prev=>data.data.breeds)
                    setIsLoading(false)
                }
                catch (e) {
                    console.log(e);
                }
            }
            getData()
            
        }
        
    }, [token,setBreeds,setIsLoading,animalType])
}