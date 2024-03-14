import {ToDoProps} from "../component/ToDo";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";

const initialState: { todoList: ToDoProps[] } = {
    todoList: []
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todoAdded(state, action) {
            state.todoList.unshift(action.payload)
        },
        todoToggled(state, action: PayloadAction<{ id: string, _endDate: string }>) {
            state.todoList = state.todoList.map((todo) => {
                return todo.id === action.payload.id
                    ? {...todo, $isFinish: !todo.$isFinish, endDate: action.payload._endDate, isDeleted: false}
                    : todo
            })
        },
        todoFocus(state, action) {
            state.todoList = state.todoList.map((todo) => {
                return todo.id === action.payload
                    ? {...todo, $isFocus: !todo.$isFocus, isDeleted: todo.isDeleted && !todo.$isFocus}
                    : {...todo, $isFocus: false, isDeleted: false}
            })
        },
        todoDeleteReady(state, action) {
            state.todoList = state.todoList.map((todo) => {
                return todo.id === action.payload
                    ? {...todo, isDeleted: true}
                    : todo
            })
        },
        todoDeleted(state, action) {
            state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
        }
    }
})

export const {
    todoAdded, todoToggled, todoFocus,
    todoDeleteReady, todoDeleted
} = todosSlice.actions

export const selectTodoList = (state: RootState) => state.todos.todoList;
export default todosSlice.reducer

