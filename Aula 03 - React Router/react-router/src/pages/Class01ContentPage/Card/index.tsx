import { ReactNode } from "react";
import styles from "./Card.module.css";

interface IProps { 
    titulo: string; 
    children: ReactNode;
};

export function Card({ titulo, children }: IProps) {
    return (
        <div className={styles.card}>            
            <h2 className={styles.title}>{titulo}</h2>
            <div className={styles.content}>{ children }</div>
        </div>
    );
}