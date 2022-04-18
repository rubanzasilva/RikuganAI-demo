import React from 'react';
//import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
//import './index.css';
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
import {NavLink, ItemContainer, ItemHeading, ItemName, UploadData, ItemTable} from './menuElements'



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
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<DatabaseOutlined /> }>
            <NavLink to="/Datasets">Datasets</NavLink>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Pre process">
              <Menu.Item key="3">Categorize</Menu.Item>
              <Menu.Item key="4">Fill In Missing values</Menu.Item>
              <Menu.Item key="5">One hot encode</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Build model">
              <Menu.Item key="6">Choose model</Menu.Item>
              <Menu.Item key="8">Optmize parameters</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<Deploy color='#98a199' size='small'/>}>
            </Menu.Item>
            <SubMenu key="sub3" icon={<TeamOutlined />} title="Monitor model">
              <Menu.Item key="10">Model versioning</Menu.Item>
              <Menu.Item key="11">Deployment logs</Menu.Item>
            </SubMenu>
            <Menu.Item key="12" icon={<FileOutlined />}>
              Deployed solutions
            </Menu.Item>
            <Menu.Item key="13" icon={<FileOutlined />}>
              Use cases
            </Menu.Item>
            <Menu.Item key="14" icon={<FileOutlined />}>
              Settings
            </Menu.Item>

          </Menu>
        </Sider>

        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>

            
          {/* content for datasets section */}
          <ItemContainer>

            <ItemHeading>
              <ItemName>

              </ItemName>
              
              <UploadData>

              <Upload {...props}>
              <Button icon={<UploadOutlined />}> UploadDataset</Button>
              </Upload>

              </UploadData>

            </ItemHeading>

            <ItemTable>

            </ItemTable>

          </ItemContainer>
          </Content>
          <Footer style={{ textAlign: 'center' }}>RIKUGAN AI ©2022 Powered by Rikugan AI Technology corp.</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default HomeMenu;