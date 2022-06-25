import { Layout, Typography } from 'antd';
import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import { SideMenu } from './components/SideMenu';
import logo from "./logo.svg";

const { Header, Content, Sider, Footer } = Layout;

function App() {
  return (
    <Layout className={styles["app__container"]}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <img src={logo} />
        <SideMenu />
      </Sider>
      <Layout>
        <Content className={`${styles["app__content"]}`}>
          <Outlet />
        </Content>
        <Footer className={styles["text-center"]}>@2022 Created by Will</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
