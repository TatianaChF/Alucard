import { createSlice } from "@reduxjs/toolkit"

type registrationState = {
    lastname: string,
    firstname: string,
    otch: string,
    phone: string,
    email: string,
    service: string,
    hospital: string,
    time: string
}

const initialState: registrationState = {
    lastname: "",
    firstname: "",
    otch: "",
    phone: "",
    email: "",
    service: "",
    hospital: "",
    time: ""
}

export const registrationClinicSlice = createSlice({
    name: "registration",
    initialState,
    reducers: {
        addInfo: (state, action) => {
            state = action.payload
        }
    }
})

export const {
    addInfo
} = registrationClinicSlice.actions

export default registrationClinicSlice.reducer