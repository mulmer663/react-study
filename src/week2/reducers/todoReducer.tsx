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
        todoToggled(state, action) {
            const todo = state.todoList.find(todo => todo.id === action.payload)
            if (todo) {
                todo.$isFinish = !todo.$isFinish;
            }
        },
        todoColorSelected: {
            reducer: (state, action: PayloadAction<{id: string, $color: string}>) => {
                const {id, $color} = action.payload
                const todo = state.todoList.find(todo => todo.id === id)
                if (todo) {
                    todo.$color = $color;
                }
            },
            prepare: (id: string, $color: string) => {
                return {
                    payload: {id: id, $color: $color}
                };
            }
        },
        todoDeleted(state, action) {
            delete state.todoList[action.payload]
        }
    }
})

export const {todoAdded, todoToggled, todoColorSelected, todoDeleted} = todosSlice.actions

export const selectTodoList = (state: RootState) => state.todos.todoList;
export default todosSlice.reducer

