import '../style/App.less';
import React from 'react'
// import Test from '../store/containers/Test'
import Home from './Home'
import Lover from './Love'
import { Layout, Menu, Icon, Switch } from 'antd';

const { Header, Footer, Sider } = Layout;

interface IProps {
  color: string,
  size?: string
}
interface IState {
  key: number, // 展示模块key
  theme: 'dark'|'light'|undefined // 切换主题
}


class App extends React.Component<IProps, IState> {
  constructor (props:any) {
    super (props);
    this.state = {
      key: 1,
      theme: 'dark'
    };
  }

  changeTheme = (value: boolean) => {
    this.setState({
      theme: value ? 'light' : 'dark',
    });
  };

  toFail = (e: any) => {

    this.setState({
      key: parseInt(e.key)
    })
    console.log(1, e)
    // (window as any).location.href= './404'
  }

  render () {
    console.log(111, this.state)
    return (
      <div>
        {/* <h2 className="home">Home</h2>
        <Test></Test> */}
        <Layout>
          <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
            }}
          >
            <div className="logo" />
            <Switch onChange={this.changeTheme} /> Change Theme
            <Menu theme={this.state.theme} mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" onClick={this.toFail}>
                <Icon type="user" />
                <span className="nav-text">nav 1</span>
              </Menu.Item>
              <Menu.Item key="2" onClick={this.toFail}>
                <Icon type="video-camera" />
                <span className="nav-text">nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span className="nav-text">nav 3</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="bar-chart" />
                <span className="nav-text">nav 4</span>
              </Menu.Item>
              <Menu.Item key="5">
                <Icon type="cloud-o" />
                <span className="nav-text">nav 5</span>
              </Menu.Item>
              <Menu.Item key="6">
                <Icon type="appstore-o" />
                <span className="nav-text">nav 6</span>
              </Menu.Item>
              <Menu.Item key="7">
                <Icon type="team" />
                <span className="nav-text">nav 7</span>
              </Menu.Item>
              <Menu.Item key="8">
                <Icon type="shop" />
                <span className="nav-text">nav 8</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ marginLeft: 200 }}>
            <Header className="header">什么啊</Header>
            {
              this.state.key === 1 && <Home ></Home>
            }
            {
              this.state.key === 2 && <Lover></Lover>
            }
            
            {/* <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                ...
                <br />
                Really
                <br />
                content
              </div>
            </Content> */}
            <Footer style={{ textAlign: 'center' }}>A Place To Updata ©2019 Created by Jianeng Hu</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default App