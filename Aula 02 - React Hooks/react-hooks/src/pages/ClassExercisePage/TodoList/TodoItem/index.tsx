import { faCheck, faClose, faPenSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useRef, useState } from "react";
import { ITodo } from "../..";
import { Button } from "../../Button";
import { TodoContext } from "../../TodoContext";
import styles from "./TodoItem.module.css";

type IProps = {
    todo: ITodo
}

export function TodoItem(props: IProps) {
    const { dispatch } = useContext(TodoContext)

    const [editMode, setEditMode] = useState(false);
    const [text, setText] = useState(props.todo.description);
    const inputRef = useRef<HTMLInputElement>(null!);

    function onEdit() {
        const updatedTodo = {
            ...props.todo,
            description: text
        };

        dispatch({ type: "EDIT_TODO", payload: updatedTodo });
        setEditMode(false);
    }

    useEffect(() => {
        if (editMode) {
            inputRef.current.focus();
        }
    }, [editMode])

    return (
        <div className={styles.container}>
            <input type="checkbox" id="checkbox" checked={props.todo.completed} onChange={() => dispatch({ type: "TOGGLE_TODO", payload: props.todo.id })} />
            {
                editMode ?
                    <>
                        <input ref={inputRef} value={text} className={styles["todo-item__description"]} onChange={e => setText(e.target.value)} />
                        <Button color="blue" icon={faCheck} onClick={onEdit} />
                        <Button color="red" icon={faClose} onClick={() => setEditMode(false)} />
                    </>
                    :
                    <>
                        <label htmlFor="checkbox" className={styles["todo-item__description"]}>
                            {props.todo.description}
                        </label>
                        <Button color="blue" icon={faPenSquare} onClick={() => setEditMode(true)} />
                        <Button color="red" icon={faTrashCan} onClick={() => dispatch({ type: "DELETE_TODO", payload: props.todo.id })} />
                    </>
            }                        
        </div>
    );
}