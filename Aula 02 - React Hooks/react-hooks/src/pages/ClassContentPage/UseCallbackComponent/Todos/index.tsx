import { memo } from "react";

interface IProps {
    todos: string[];
    addTodo: () => void;
}

function TodosComponent({ todos, addTodo }: IProps) {
    console.log("renderizou o componente filho");
    return (
        <>
            <h2>Lista de Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>Adicionar</button>
        </>
    );
}

// Usar o memo em Pure Function Components
export const Todos = memo(TodosComponent);