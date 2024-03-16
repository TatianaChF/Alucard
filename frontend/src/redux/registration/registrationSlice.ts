import { createSlice } from "@reduxjs/toolkit";
import { registrationData } from "./types";

const initialState: registrationData = {
    userId: "0",
    userSurname: "",
    userName: "",
    userPatronymicSurname: "",
    userTel: "",
    userPassword: "",
    isAuth: false
}

export const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {

    }
})

export default registrationSlice.reducer