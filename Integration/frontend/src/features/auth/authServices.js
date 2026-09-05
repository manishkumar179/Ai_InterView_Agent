
import axios from 'axios'

const API = axios.create({
    baseURL:"http://localhost:3000/api/auth",
    withCredentials:true
})

export const register = async ({username, email, password})=>{
    try {
        const response = await API.post("/register",{
            username, email, password
        })

        return response.data
    } catch (error) {
        console.log(error)
    }
}


export const login = async ({email, password}) =>{
    try {
        const response = await API.post("/login",{
            email, password
        })

        return response.data;
    } catch (error) {
        console.log(error)
    }
}


export const logout = async () =>{
    try {
        const response = await API.get("/logout");

        return response.data
    } catch (error) {
        console.log(error)
    }
}


export const getMe = async () =>{
    try {
        const response = await API.get("/get-me");

        return response.data
    } catch (error) {
        console.log(error)
    }
}


