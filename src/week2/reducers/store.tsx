import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import todoReducer from "./todoReducer";
import {useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()