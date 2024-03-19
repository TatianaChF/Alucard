import { createSlice } from "@reduxjs/toolkit"

type selectionState = {
    services: Array<string>,
    hospitals: Array<string>,
    times: Array<string>
}

const initialState: selectionState = {
    services: ["Сдача анализов", "Донорство крови"],
    hospitals: ["Медицинское учреждение №1", "Медицинское учреждение №2", "Медицинское учреждение №3", 
    "Медицинское учреждение №4", "Медицинское учреждение №5"],
    times: ["8:00","8:10","8:20","8:30","8:40","8:50","9:00","9:10","9:20","9:30","9:40","9:50"]
}

export const selectionSlice = createSlice({
    name: "selections",
    initialState,
    reducers: {
        setServices: (state, action) => {
            state.services = action.payload;
        },
        setHospitals: (state, action) => {
            state.hospitals = action.payload;
        },
        setTimes: (state, action) => {
            state.times = action.payload;
        }
    }
})

export const {
    setServices,
    setHospitals,
    setTimes
} = selectionSlice.actions

export default selectionSlice.reducer