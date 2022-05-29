import React from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import { Layout, Menu, Breadcrumb ,Upload, Button} from 'antd';
import {
  HomeOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  DatabaseOutlined,
  UploadOutlined ,
} from '@ant-design/icons';
import { Deploy } from 'grommet-icons';
// import {NavLink, ItemContainer, ItemHeading, ItemName, UploadData, ItemTable, MenuContainer} from './menuElements'
import { MenuContainer } from './menuElements';
import {
  Outlet,
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";
import type { LinkProps } from "react-router-dom";





const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  previewFile(file) {
    console.log('Your upload file:', file);
    // Your process logic. Here we just mock to the same file
    return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
      method: 'POST',
      body: file,
    })
      .then(res => res.json())
      .then(({ thumbnail }) => thumbnail);
  },
};



function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ textDecoration: match ? "underline" : "none" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && " (active)"}
    </div>
  );
}





class HomeMenu extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };


  render() { 
    const { collapsed } = this.state;
    return (
      <MenuContainer>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}  >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
            <CustomLink to="/">Home</CustomLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<DatabaseOutlined /> }>
            <CustomLink to="/dataSources"> Datasources</CustomLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<DatabaseOutlined /> }>
            <CustomLink to="/Visualization"> Visualization </CustomLink>
            </Menu.Item>

            <SubMenu key="sub1" icon={<UserOutlined />} title="Data Management">
            <Menu.Item key="3">
                <CustomLink to="/Visualization"> Data transform </CustomLink>
              </Menu.Item>
              <Menu.Item key="4">
                <CustomLink to="/Visualization"> Fill In </CustomLink>
              </Menu.Item>
              <Menu.Item key="5">
                <CustomLink to="/Visualization"> One hot encode </CustomLink>
              </Menu.Item>
            </SubMenu>

            <Menu.Item key="6" icon={<DatabaseOutlined /> }>
            <CustomLink to="/Visualization"> Visualization </CustomLink>
            </Menu.Item>

            <SubMenu key="sub2" icon={<UserOutlined />} title="Use Cases">
              <Menu.Item key="7">
                <CustomLink to="/DemandForecasting"> Demand Forecasting </CustomLink>
              </Menu.Item>
              <Menu.Item key="8">
                <CustomLink to="/FraudDetection"> Fraud Detection </CustomLink>
              </Menu.Item>
              <Menu.Item key="9">
                <CustomLink to="/Recommender"> Recommender </CustomLink>
              </Menu.Item>
            </SubMenu>

            
            <Menu.Item key="10" icon={<FileOutlined />}>
            <CustomLink to="/Admin"> Admin </CustomLink>
            </Menu.Item>

          </Menu>
          <hr />

<Outlet />
        </Sider>

        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            
          <p>trak</p>
           
          </Content>
          <Footer style={{ textAlign: 'center' }}>RIKUGAN AI ©2022 Powered by Rikugan AI Technology Corp.</Footer>
        </Layout>
      </Layout>
      </MenuContainer>
    );
  }
}

export default HomeMenu;




