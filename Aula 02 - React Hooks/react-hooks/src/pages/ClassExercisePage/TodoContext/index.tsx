import React, { createContext, useContext, useState } from "react";
import { ITodo } from "..";

interface ITodoContext {
    todos: ITodo[];
    addTodo: (description: string) => void;
    editTodo: (todo: ITodo) => void;
    deleteTodo: (todoId: number) => void;
    toggleTodo: (todoId: number) => void;
}

export const TodoContext = createContext<ITodoContext>(null!);

export function TodoProvider({ children }: { children: React.ReactNode }) {
    const [todos, setTodos] = useState<ITodo[]>([
        { id: 1, description: "Todo Teste 1", completed: false },
        { id: 2, description: "Todo Teste 2", completed: true },
        { id: 3, description: "Todo Teste 3", completed: false },
    ]);

    function addTodo(description: string) {
        const id = todos[todos.length - 1].id + 1;

        const newTodo: ITodo = {
            id,
            completed: false,
            description
        }

        setTodos(prevState => [...todos, newTodo]);
    }

    function editTodo(updatedTodo: ITodo) {
        const todoIndex = todos.findIndex(todo => todo.id === updatedTodo.id);

        if (todoIndex === -1) {
            alert("Não foi encontrado o item na lista");
        }

        const updatedTodos = [...todos];
        updatedTodos[todoIndex] = updatedTodo;

        setTodos(updatedTodos);
    }

    function toggleTodo(todoId: number) {
        const todoIndex = todos.findIndex(todo => todo.id === todoId);

        if (todoIndex === -1) {
            alert("Não foi encontrado o item na lista");
        }

        const updatedTodos = [...todos];
        updatedTodos[todoIndex].completed = !updatedTodos[todoIndex].completed;

        setTodos(updatedTodos);
    }

    function deleteTodo(todoId: number) {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    }

    return (
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo, editTodo, toggleTodo }}>
            { children }
        </TodoContext.Provider>
    );
}

export const useTodo = () => useContext(TodoContext);



