import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined, UserOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import "./App.css";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[location.pathname]}          
        >
          <Menu.Item key={"/"}>
            <UserOutlined />
            <span>Primeira página</span>
            <Link to={"/"} />
          </Menu.Item>
          <Menu.Item key={"/segunda-pagina"}>
            <UserOutlined />
            <span>Segunda página</span>
            <Link to={"/segunda-pagina"} />
          </Menu.Item>
          <Menu.Item key={"/pagina-protegida"}>
            <UserOutlined />
            <span>Página protegida</span>
            <Link to={"/pagina-protegida"} />
          </Menu.Item>
          <Menu.Item key={"/logout"} onClick={() => auth.signOut(() => navigate("/"))}>
            <LogoutOutlined />
            <span>Sair</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >          
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;