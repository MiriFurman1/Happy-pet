import { useEffect} from "react";
import axios from "axios";

export function GetData({setAnimals,setIsLoading,token, currentPage,setLastPage}) {

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
                    setLastPage(prev=>data.data.pagination.total_pages)
                    setAnimals(prev=>data.data.animals)
                    setIsLoading(false)
                    
                }
                catch (e) {
                    console.log(e);
                }
            }
            getData()
            
        }
        
    }, [token,setAnimals,setIsLoading,currentPage,setLastPage])
}