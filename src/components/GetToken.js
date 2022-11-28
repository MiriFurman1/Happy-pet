
import { useEffect } from 'react';
export default function GetToken({setToken}) {


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
        getToken()
        setInterval(()=>{
            getToken();
        },1800000)

    }, [setToken])

}
