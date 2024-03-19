import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import selectionSlice from "./selection/selectionSlice";

export const store = configureStore({
    reducer: {
        selection: selectionSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch