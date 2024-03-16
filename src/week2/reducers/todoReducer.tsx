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
            state.todoList.unshift(action.payload);
        },
        todoToggled(state, action: PayloadAction<{ id: string, newEndDate: string }>) {
            const todo = state.todoList.find(todo => todo.id == action.payload.id);
            if (todo) {
                todo.$isFinish = !todo.$isFinish;
                todo.endDate = action.payload.newEndDate;
                todo.isDeleted = false;
            }
        },
        todoFocus(state, action) {
            state.todoList.map((todo) => {
                if (todo.id === action.payload) {
                    todo.$isFocus = !todo.$isFocus;
                    todo.isDeleted = todo.isDeleted && todo.$isFocus;
                } else {
                    todo.$isFocus = false;
                    todo.isDeleted = false;
                }
            })
        },
        todoUpdateColor(state, action: PayloadAction<{ id: string, color: string }>) {
            const todo = state.todoList.find(todo => todo.id == action.payload.id);
            if (todo) {
                todo.$color = action.payload.color
            }
        },
        todoUpdateText(state, action: PayloadAction<{ id: string, text: string }>) {
            const todo = state.todoList.find(todo => todo.id == action.payload.id);
            if (todo) {
                todo.text = action.payload.text
            }
        },
        todoDeleteReady(state, action) {
            const todo = state.todoList.find(todo => todo.id == action.payload);
            if (todo) {
                todo.isDeleted = true
            }
        },
        todoDeleted(state, action) {
            const index = state.todoList.findIndex(todo => todo.id === action.payload);
            if (index !== -1) {
                state.todoList.splice(index, 1);
            }
        }
    }
})

export const {
    todoAdded, todoToggled, todoFocus,
    todoDeleteReady, todoDeleted, todoUpdateColor,
    todoUpdateText
} = todosSlice.actions

export const selectTodoList = (state: RootState) => state.todos.todoList;
export default todosSlice.reducer

