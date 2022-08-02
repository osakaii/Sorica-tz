
import axios from 'axios';
import { API } from './_constants';

export const getOrders =  async ( page, size , key , value , code ) => {
    try{
        const response = await axios.get( `${API}page=${page}&size=${size}&sort[0].key=${key}&sort[0].value=${value}&code=${code}`)
        return response
    }catch{
        console.log("server doesnt response")
    }
}