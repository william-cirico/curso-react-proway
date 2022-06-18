import { createContext, useState } from "react";
import { Component1 } from "./Component1";

interface INomeContext {
    nome: string;
    setNome: React.Dispatch<React.SetStateAction<string>>;
}

export const NomeContext = createContext<INomeContext>(null!);

export function UseContextComponent() {
    const [nome, setNome] = useState("William");
    return (
        <>
            <h2>UseContext</h2>
            <p>
                O UseContext é utilizado para criar um estado global que pode ser
                compartilhado entre vários componentes, evitando o prop drilling.
            </p>
            <NomeContext.Provider value={{ nome, setNome }}>
                {/* <Component1 nome={nome} setNome={setNome} /> */}
                <Component1 />
            </NomeContext.Provider>
        </>
    );
}