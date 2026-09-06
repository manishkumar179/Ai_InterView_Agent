import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../auth/authSlice";
import { getMe, login, logout, register } from "../auth/authServices";
import { useEffect } from "react";




export const useAuth = () => {
    
    const dispatch = useDispatch()


    const handleLogin = async ({ email, password }) => {

        dispatch(setLoading(true));
        const data = await login({ email, password });
        dispatch(setUser(data.user));
        dispatch(setLoading(false));

    }

    const handleRegister = async ({username, email, password})=>{

        dispatch(setLoading(true))
        const data = await register({username, email, password});
        dispatch(setUser(data.user));
        dispatch(setLoading(false));

    }


    const handleLogout  = async ()=>{

        dispatch(setLoading(true))
        const data = await logout()
        dispatch(setUser(null))
        dispatch(setLoading(false));

    }



    useEffect(()=>{
        const getAndSetUser = async ()=>{
            const data = await getMe();
            dispatch(setUser(data.user));
            dispatch(setLoading(false))
        }

        getAndSetUser()
    },[])






    return {
        handleLogin,
        handleLogout,
        handleRegister
    }

}

