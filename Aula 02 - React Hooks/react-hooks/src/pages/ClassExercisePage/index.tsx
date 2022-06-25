import { Button } from "./Button";
import { faPenSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { TodoItem } from "./TodoList/TodoItem";
import { useState } from "react";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";
import { TodoHeader } from "./TodoHeader";
import { TodoContext, TodoProvider } from "./TodoContext";

export interface ITodo {
    id: number;
    description: string;
    completed: boolean;
}

export function ClassExercisePage() {
    return (
        <div>
            <TodoProvider>
                <TodoHeader />
                <TodoForm />
                <TodoList />
            </TodoProvider>
        </div>
    );
}