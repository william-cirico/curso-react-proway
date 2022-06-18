import { useState } from "react";

function useToggle(defaultValue: any) {
    const [value, setValue] = useState(defaultValue);

    function toggleValue(value: any) {
        setValue((currentValue: any) => typeof value === "boolean" ? value : !currentValue);
    }

    return [value, toggleValue];
}

export function CustomHookComponent() {
    const [value, toggleValue] = useToggle(false);

    return (
        <>
        <h2>Custom Hook</h2>
        <p>{value.toString()}</p>
        <button onClick={toggleValue}>Mudar</button>
        <button onClick={() => toggleValue(true)}>Verdadeiro</button>
        <button onClick={() => toggleValue(false)}>Falso</button>
        </>
    );
}