import React, { createContext, useContext, useReducer, useState } from "react";
import { act } from "react-dom/test-utils";
import { ITodo } from "..";

interface ITodoContext {
    todos: ITodo[];
    dispatch: React.Dispatch<ACTIONTYPE>;
}

export const TodoContext = createContext<ITodoContext>(null!);

const initialState = [
    { id: 1, description: "Todo Teste 1", completed: false },
    { id: 2, description: "Todo Teste 2", completed: true },
    { id: 3, description: "Todo Teste 3", completed: false },
];

type ACTIONTYPE =
    | { type: "ADD_TODO", payload: string }
    | { type: "TOGGLE_TODO", payload: number }
    | { type: "DELETE_TODO", payload: number }
    | { type: "EDIT_TODO", payload: ITodo }

function reducer(state: typeof initialState, action: ACTIONTYPE) {
    switch (action.type) {
        case "ADD_TODO":
            const id = state[state.length - 1].id + 1;
            const newTodo: ITodo = {
                id,
                completed: false,
                description: action.payload
            }

            return [...state, newTodo];
        case "EDIT_TODO":
            return state.map(item => {
                if (item.id === action.payload.id) {
                    item.description = action.payload.description;
                }

                return item;
            });
        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.payload);
        case "TOGGLE_TODO":
            const todoIndex = state.findIndex(todo => todo.id === action.payload);

            console.log(todoIndex);
            const updatedTodos = [...state];
            updatedTodos[todoIndex].completed = updatedTodos[todoIndex].completed; 
            console.log(updatedTodos);
            return updatedTodos;
        default:
            return state;
    }
}

export function TodoProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <TodoContext.Provider value={{ todos: state, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
}

export const useTodo = () => useContext(TodoContext);



