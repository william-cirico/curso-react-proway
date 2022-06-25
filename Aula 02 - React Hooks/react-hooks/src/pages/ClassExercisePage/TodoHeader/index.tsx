import { useTodo } from "../TodoContext";

export function TodoHeader() {
    const { todos } = useTodo();

    return (
        <h2>Todos ({todos.length})</h2>
    );
}