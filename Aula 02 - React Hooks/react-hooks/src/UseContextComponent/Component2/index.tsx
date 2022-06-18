import { useContext, useState } from "react";
import { NomeContext } from "../indext";

// interface IProps {
//     nome: string;
//     setNome: React.Dispatch<React.SetStateAction<string>>
// }

export function Component2() {
    const { nome, setNome } = useContext(NomeContext);

    return <input value={nome} onChange={e => setNome(e.target.value)} />;
}