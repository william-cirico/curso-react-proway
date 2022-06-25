import { useMemo, useState } from "react";

function funcaoCustosa(numero: number) {
    console.log("Calculando");
    for (let i = 0; i < 100000000; i++) {
        numero += 1;
    }

    return numero;
}

export function UseMemoComponent() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState<string[]>([]);
    const calculo = useMemo(() => funcaoCustosa(count), [count]);

    const increment = () => {
        setCount(state => state + 1);
    };
    const addTodo = () => {
        setTodos(state => [...state, "New Todo"]);
    };

    return (
        <div>
            <h2>UseMemo</h2>
            <p>
                Evita que funções custosas rodem à cada renderização se os parâmetros
                necessários para o seu funcionamento continuam iguais.
            </p>
            <div>
                <h2>Todos</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}
                <button onClick={addTodo}>Adicionar</button>
            </div>
            <hr />
            <div>
                Contador: {count}
                <button onClick={increment}>+</button>
                <h2>Cálculo custoso</h2>
                {calculo}
            </div>
        </div>
    );
}