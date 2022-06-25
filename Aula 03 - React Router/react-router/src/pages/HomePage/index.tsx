import { BookOutlined, FileDoneOutlined } from "@ant-design/icons";
import { Button, Space, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { Link } from "react-router-dom";
import { convertISODateToDate } from "../../utils";
import { motion } from "framer-motion";

interface DataType {
    id: number;
    name: string;
    date: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "Código",
        dataIndex: "id",
        width: "5%"
    },
    {
        title: "Nome",
        dataIndex: "name",
        width: "60%"
    },
    {
        title: "Data",
        dataIndex: "date",
        width: "15%",
        render: date => <>{convertISODateToDate(date)}</>
    },
    {
        render: (_: any, record) => <Space direction="vertical">
            <Link to={`aulas/${record.id}/conteudos`}><Button block type="primary" icon={<BookOutlined />}>Conteúdo</Button></Link>
            <Link to={`aulas/${record.id}/exercicios`}><Button block icon={<FileDoneOutlined />}>Exercícios</Button></Link>
        </Space>,
        width: "20%"
    }
];

const data: DataType[] = [
    { id: 1, name: "Aula 01 - Fundamentos do React", date: "2022-06-11T00:00:00Z" },
    { id: 2, name: "Aula 02 - React Hooks", date: "2022-06-18T00:00:00Z" },
    { id: 3, name: "Aula 03 - React Router", date: "2022-06-25T00:00:00Z" },
]

export function HomePage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Table columns={columns} dataSource={data} />
        </motion.div>
    );
}