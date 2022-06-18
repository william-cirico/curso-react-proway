import { useReducer } from "react";

type ACTIONTYPE =
    | { type: "incrementar" }
    | { type: "decrementar" };

const initialState = { contador: 0 };

function reducer(state: { contador: number }, action: ACTIONTYPE) {
    switch (action.type) {
        case "incrementar":
            return { contador: state.contador + 1 };
        case "decrementar":
            return { contador: state.contador - 1 };
        default:
            throw new Error();
    }
}

export function UseReducerComponent() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h2>UseReducer</h2>
            <p>
                É similar ao useState, ele permite atualizar o estado de acordo
                com uma regra predefinida.
            </p>
            <h2>{state.contador}</h2>
            <button onClick={() => dispatch({ type: "decrementar" })}>-</button>
            <button onClick={() => dispatch({ type: "incrementar" })}>+</button>
        </>
    );
}