import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./todoReducer";
import {useDispatch, useSelector} from "react-redux";
import pagingReducer from "./pagingReducer";

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        paging: pagingReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()