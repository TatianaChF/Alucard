import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import selectionReducer from "./selection/selectionSlice"

export const store = configureStore({
    reducer: {
        selection: selectionReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

