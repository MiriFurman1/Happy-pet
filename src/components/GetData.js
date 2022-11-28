import { useEffect} from "react";
import axios from "axios";

export function GetData({setAnimals,setIsLoading,token, currentPage}) {

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
                    const data = await authAxios.get(`/animals?page=${currentPage}`)
                    console.log(data);
                    setAnimals(prev=>data.data.animals)
                    setIsLoading(false)
                    console.log(currentPage);
                }
                catch (e) {
                    console.log(e);
                }
            }
            getData()
            
        }
        
    }, [token,setAnimals,setIsLoading,currentPage])
}