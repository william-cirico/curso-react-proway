import { Aluno } from "./Aluno";
import { Card } from "./Card";
import { Contador } from "./Contador";
import { PrimeiroComponenteClasse } from "./PrimeiroComponenteClasse";
import { PrimeiroComponenteFuncao } from "./PrimeiroComponenteFuncao";
import styles from "./Class01ContentPage.module.css";
import { Typography } from "antd";
import { motion } from "framer-motion";

export function Class01ContentPage() {
    return (
        <motion.div className={styles.container}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Typography.Title>Fundamentos do React</Typography.Title>
            <Card titulo="Componente de classe">
                <PrimeiroComponenteClasse />
            </Card>
            <Card titulo="Componente de Função">
                <PrimeiroComponenteFuncao />
            </Card>
            <Card titulo="Props e Renderização de Listas">
                <Aluno nome="William" notas={[8, 10, 9]} />
                <Aluno nome="Marcos" notas={[8, 5, 9]} />
                <Aluno nome="Bruno" notas={[5, 4, 3]} />
            </Card>
            <Card titulo="State e Eventos">
                <Contador valorInicial={10} />
                <Contador valorInicial={12} />
            </Card>
        </motion.div>
    );
}