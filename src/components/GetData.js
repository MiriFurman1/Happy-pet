import { useEffect, useState } from "react";
import axios from "axios";
export function GetData({setAnimals,setIsLoading}) {
    const [token, setToken] = useState('')


    useEffect(() => {

        const getToken = async () => {
            var formdata = new FormData();
            formdata.append("client_id", "nVs9fUcKeD12neygEBUK1iOU4Cs1qbIc1qjpRHWXKSHDPe2Kwr");
            formdata.append("client_secret", "cZm61JtlKtRdeETfUUhwsA8pUqwaaTRtcnKNEkO4");
            formdata.append("grant_type", "client_credentials");
            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };
            const data = await fetch("https://api.petfinder.com/v2/oauth2/token", requestOptions)
            const tokenData = await data.json()
            console.log(tokenData);
            setToken(tokenData.access_token)
        }
        setInterval(getToken(), 3500000)
    } )


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
                    const data = await authAxios.get('/animals?page=6')
                    setAnimals(prev=>data.data.animals)
                }
                catch (e) {
                    console.log(e);
                }
            }
            getData()
        }
        setIsLoading(false)
    } )
}