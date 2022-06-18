import { useEffect, useRef, useState } from "react";

export function UseRefComponent() {
    const [horario, setHorario] = useState(new Date());

    const inputRef = useRef<HTMLInputElement>(null!);
    const relogioRef = useRef<NodeJS.Timer>();

    function handleFocusClick() {
        inputRef.current.focus();
    }

    function handleCancelClick() {
        clearInterval(relogioRef.current);
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setHorario(new Date())
        }, 1000);
        relogioRef.current = timer;
        // Limpando o timer quando o componente desmontar
        return () => clearInterval(timer);
    }, [horario]);


    return (
        <>
            <h2>UseRef</h2>
            <p>
                O UseRef é utilizado para armazenar um valor mutável que não causa uma re-renderização.
                Também pode ser utilizado para manipular o DOM.
            </p>
            <h3>Exemplo 01</h3>
            <input type="text" placeholder="Digite alguma coisa" ref={inputRef} />
            <button className="button" onClick={handleFocusClick}>Focar o Input</button>
            <h3>Exemplo 02</h3>
            <p>Horário: {horario.toLocaleTimeString()}</p>
            <button className="button" onClick={handleCancelClick}>Parar o relógio 🕰</button>
        </>
    );
}