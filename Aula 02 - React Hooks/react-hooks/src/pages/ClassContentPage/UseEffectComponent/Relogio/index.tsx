import { useEffect, useState } from "react";

export function Relogio() {
    const [horario, setHorario] = useState("00:00:00");

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("O relógio atualizou");
            setHorario(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <h2>{horario}</h2>
    );
}