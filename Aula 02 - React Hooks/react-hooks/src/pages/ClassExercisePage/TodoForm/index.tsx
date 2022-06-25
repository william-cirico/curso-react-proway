import { useState } from "react";
import { useTodo } from "../TodoContext";
import styles from "./TodoForm.module.css";

export function TodoForm() {
    const { addTodo } = useTodo();
    const [text, setText] = useState("");

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        addTodo(text);
        setText("");
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <input className={styles.input} value={text} onChange={e => setText(e.target.value)} />
            <button className={styles.button}>Adicionar</button>
        </form>
    );
}