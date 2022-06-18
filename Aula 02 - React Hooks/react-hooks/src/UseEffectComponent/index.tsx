import { useState } from "react";
import { Relogio } from "./Relogio";

export function UseEffectComponent() {
    const [mostrarRelogio, setMostrarRelogio] = useState(true);

    return (
        <>
            <h2>UseEffect</h2>
            <p>
                O UseEffect permite a execução de efeitos colaterais no componente. Exemplos de efeitos colaterais são: obter dados
                de uma API, atualizar o DOM e timers.
            </p>
            <p>
                O UseEffect é responsável por disparar eventos de acordo com o ciclo de vida do componente:
                <a href="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/" target="_blank">https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/</a>
            </p>
            {
                mostrarRelogio && <Relogio />
            }
            <button onClick={() => setMostrarRelogio(prevState => !prevState)}>Mostrar/Esconder relógio</button>
        </>
    );
}