import { useContext } from "react";
import { Component2 } from "../Component2";
import { NomeContext } from "../indext";

// interface IProps {
//     nome: string;
//     setNome: React.Dispatch<React.SetStateAction<string>>;
// }

export function Component1() {
    const { nome } = useContext(NomeContext);

    return (
        <>
            <h2>Nome no componente 01: {nome}</h2>
            <Component2 />
        </>
    );
}