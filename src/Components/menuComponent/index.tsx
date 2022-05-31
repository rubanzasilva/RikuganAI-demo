import React from 'react';
import 'antd/dist/antd.css';
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

import {
  Outlet,
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";
import type { LinkProps } from "react-router-dom";





const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


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





class HomeMenuComp extends React.Component {
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

      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}  >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
            <CustomLink to="/">Home</CustomLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<DatabaseOutlined /> }>
            <CustomLink to="/Datasets">Datasets</CustomLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<DatabaseOutlined /> }>
            <CustomLink to="/Visualization"> Visualization </CustomLink>
            </Menu.Item>

            <SubMenu key="sub1" icon={<UserOutlined />} title="Use Cases">
              <Menu.Item key="3">
                <CustomLink to="/Visualization"> Demand Forecasting </CustomLink>
              </Menu.Item>
              <Menu.Item key="4">
                <CustomLink to="/Visualization"> Fraud Detection </CustomLink>
              </Menu.Item>
              <Menu.Item key="5">
                <CustomLink to="/Visualization"> Recommender </CustomLink>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="sub2" icon={<UserOutlined />} title="Data Transformations">
            <Menu.Item key="6">
                <CustomLink to="/Visualization"> Categorize </CustomLink>
              </Menu.Item>
              <Menu.Item key="7">
                <CustomLink to="/Visualization"> Fill In </CustomLink>
              </Menu.Item>
              <Menu.Item key="8">
                <CustomLink to="/Visualization"> One hot encode </CustomLink>
              </Menu.Item>
            </SubMenu>

            
            <Menu.Item key="14" icon={<FileOutlined />}>
              Settings
            </Menu.Item>

          </Menu>
          <hr />

<Outlet />
        </Sider>
      </Layout>

    );
  }
}

export default HomeMenuComp;




