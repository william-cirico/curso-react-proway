import { LoginOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { motion } from "framer-motion";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // @ts-ignore
    const from = location.state?.from?.pathname || "/"

    function onFinish({ login, password }: { login: string, password: string }) {
        auth.signIn(
            login,
            password,
            () => navigate(from, { replace: true })
        )
    }

    return (
        <motion.div 
            className={styles.container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Form
                layout="vertical"
                size="large"
                className={styles.form}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Login"
                    name="login"
                >
                    <Input type="email" placeholder="email@example.com" />
                </Form.Item>
                <Form.Item
                    label="Senha"
                    name="password"
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button block type="primary" icon={<LoginOutlined />} htmlType="submit">Entrar</Button>
                </Form.Item>
            </Form>
        </motion.div>        
    );
}