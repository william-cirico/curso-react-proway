import { useCallback, useState } from "react";
import { Todos } from "./Todos";

export function UseCallbackComponent() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState<string[]>([]);

    const increment = () => {
        setCount(state => state + 1);
    };
    const addTodo = useCallback(() => {
        setTodos(state => [...state, "New Todo"]);
    }, []);

    return (
        <>
            <h2>UseCallback</h2>
            <p>É utilizado para evitar que uma função seja recriada a cada re-renderização.</p>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
}