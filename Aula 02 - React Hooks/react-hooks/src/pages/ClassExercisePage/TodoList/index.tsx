import { useTodo } from "../TodoContext";
import { TodoItem } from "./TodoItem";

export function TodoList() {    
    const { todos } = useTodo();

    return (
        <>
            {
                todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))
            }
        </>
    );
}