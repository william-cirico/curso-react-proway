import { BookOutlined, LoginOutlined, LogoutOutlined, ProfileOutlined, ReadOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export function SideMenu() {
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["/"]}
            selectedKeys={[location.pathname]}
        >
            <Menu.Item key={"/login"}>
                <LoginOutlined />
                <span>Login</span>
                <Link to="/login" />
            </Menu.Item>
            <Menu.Item key={"/"}>
                <ProfileOutlined />
                <span>Aulas</span>
                <Link to="/" />
            </Menu.Item>
            <Menu.SubMenu key={"1"} title={
                <>
                    <ReadOutlined />
                    <span>Aula 01</span>
                </>
            }>
                <Menu.Item key={"/aulas/1/conteudos"}>
                    <BookOutlined />
                    <span>Conteúdo</span>
                    <Link to="/aulas/1/conteudos" />
                </Menu.Item>
                <Menu.Item key={"/aulas/1/exercicios"}>
                    <BookOutlined />
                    <span>Exercícios</span>
                    <Link to="/aulas/1/exercicios" />
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key={"2"} onClick={() => auth.signOut(() => navigate("/"))}>
                <LogoutOutlined />
                <span>LogOut</span>
            </Menu.Item>
        </Menu >
    );
}