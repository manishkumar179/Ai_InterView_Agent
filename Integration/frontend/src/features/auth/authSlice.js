
import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:null,
        laoding:false,
        error:null,
    },

    reducers:{
        loginStart:(state)=>{
            state.laoding = true;
            state.error = null

        },

        loginSuccess:(state, action)=>{
            state.laoding = false;
            state.user = action.payload;
            state.error = null;
        }
    }
})

