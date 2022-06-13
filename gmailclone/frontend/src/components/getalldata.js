import axios from 'axios'

const url="http://localhost:8080/users/getgemail";


export const getUsers = async()=>{
    return await axios.get(url);
}

export const getusers = async (id) => {
    return await axios.get(`${url}/${id}`);
}