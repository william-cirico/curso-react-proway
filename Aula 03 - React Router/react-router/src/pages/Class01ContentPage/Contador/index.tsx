import { useEffect, useState } from "react";

interface IProps {
    valorInicial: number;
}

// Valor inicial deve ser uma prop
export function Contador({ valorInicial }: IProps) {
    const [contador, setContador] = useState(valorInicial);
    const [valorContador, setValorContador] = useState(1);
    const [cor, setCor] = useState("#000");

    function incrementaContador() {
        setContador((prevValue) => prevValue + valorContador);
    }

    function decrementaContador() {
        // Arrow Function
        setContador((prevValue) => prevValue - valorContador);
    }

    useEffect(() => {
        if (contador < 0) {
            setCor("red");
        } else if (contador > 0) {
            setCor("blue");
        } else { 
            setCor("black");
        }
        
        console.log(contador);
        console.log(valorContador);
    })

    return (
        <>
        {/* Quando o contador for negativo a cor do h2 fique vermelha */}
        {/* Quando o contador for nulo a cor fique preta */}
        {/* Quando o contador for positivo a cor do h2 fique azul */}
            <h2 style={{ color: cor }}>Contador: {contador}</h2>
            <button onClick={decrementaContador}>-</button>
            {/* Componente controlado */}
            <input placeholder="Digite um número" onChange={e => setValorContador(+e.target.value)} value={valorContador} />
            <button onClick={incrementaContador}>+</button>
        </>
    );
}