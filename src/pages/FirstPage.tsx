import React from 'react'
import Edit from './Edit'
import Lover from './Love'
import '../style/App.less';
import { Layout, Menu, Icon } from 'antd';
import Home from '../store/containers/Home'

const { Header, Footer, Sider } = Layout;

interface IProps {
}
interface IState {
  key: number, // 展示模块key
  theme: 'dark'|'light'|undefined, // 切换主题
  navList: Array<{
    type: string,
    text: string
  }>,
  headTitle: string
}

class FirstPage extends React.Component<IProps, IState> {
  constructor (props:any) {
    super (props);
    this.state = {
      key: 0,
      theme: 'dark',
      navList: [
        {
          type: 'user',
          text: '平时杂记'
        },
        {
          type: 'video-camera',
          text: 'LeetCode练习题'
        },
        {
          type: 'upload',
          text: '数据结构'
        },
        {
          type: 'bar-chart',
          text: '小程序'
        },
        {
          type: 'cloud-o',
          text: 'Threejs'
        },
        {
          type: 'shop',
          text: '数据统计'
        },
        {
          type: 'edit',
          text: '添加笔记'
        }
      ],
      headTitle: '平时杂记'
    };
  }

  changeTheme = (value: boolean) => {
    this.setState({
      theme: value ? 'light' : 'dark',
    });
  };

  toRoute = (i:{
    type: string,
    text: string
  }, index: number) => {

    this.setState({
      key: index,
      headTitle: i.text
    })
  }

  render () {
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
            {/* <Switch onChange={this.changeTheme} /> Change Theme */}
            <Menu 
              mode="inline" 
              theme={this.state.theme} 
              defaultSelectedKeys={['0']}
            >
              {
                this.state.navList && this.state.navList.map((i, index) => (
                  <Menu.Item key={index} onClick={() => {
                    this.toRoute(i, index)
                  }}>
                    <Icon type={i.type} />
                    <span className="nav-text">{i.text}</span>
                  </Menu.Item>
                ))
              }
            </Menu>
          </Sider>
          <Layout style={{ marginLeft: 200 }}>
            <Header className="header">{this.state.headTitle}</Header>
            <div style={{ padding: '10px 20px' }}>
              {
                this.state.key !== 6 && <Home keyName={this.state.key}></Home>
              }
              {
                this.state.key === 6 && <Edit></Edit>
              }
            </div>
            <Footer style={{ textAlign: 'center' }}>A Place To Updata ©2019 Created by Jianeng Hu</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}

const mapStateToProps = (data: any) => {
  return{
    type: data.home.type
  }
}

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     destroyTodo : (typei: number) => dispatch({
//       type : 'CHANGE_TYPE',
//       typei
//     })
//   }
// }

export default FirstPage