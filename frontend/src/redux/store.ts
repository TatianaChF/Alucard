import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import registrationSlice from "./registration/registrationSlice";

export const store = configureStore({
    reducer: {
        registration: registrationSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch