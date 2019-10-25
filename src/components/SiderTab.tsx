import React from 'react'
import { Layout, Menu, Icon } from 'antd';

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

class SiderTab extends React.Component<IProps, IState> {
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
      </div>
    )
  }
}
  

export default SiderTab
