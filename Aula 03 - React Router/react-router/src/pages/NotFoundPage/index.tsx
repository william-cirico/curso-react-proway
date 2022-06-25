import { Button, Result } from "antd";
import { Link } from "react-router-dom";

export function NotFoundPage() {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Página não encontrada."
            extra={<Link to={"/"}><Button type="primary">Voltar para as aulas</Button></Link>}
        />
    );
}