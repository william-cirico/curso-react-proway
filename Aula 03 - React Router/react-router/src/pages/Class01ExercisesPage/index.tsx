import { Divider, Row, Typography } from "antd";
import { Class01Exercise02 } from "./Class01Exercise02";
import { motion } from "framer-motion";

export default function Class01ExercisesPage() {
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Typography.Title>Exercícios da Aula 01</Typography.Title>
            <Divider>Exercício 02</Divider>
            <Row>
                <Class01Exercise02 />
            </Row>
        </motion.div>
    );
}