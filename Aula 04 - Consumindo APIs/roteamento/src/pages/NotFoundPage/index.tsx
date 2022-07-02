import { Button, Result } from "antd";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Me desculpe, a página que você visitou não existe."
            extra={
                <Link to="/">
                    <Button type="primary">Voltar para a tela inicial</Button>
                </Link>
            }
        />
    );
}