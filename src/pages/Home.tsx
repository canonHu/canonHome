import React from 'react';
import { connect } from 'react-redux'
import request from '../utils/request'
import { List, Avatar, Icon, Spin } from 'antd';
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

interface IProps {
  listData: Array<{
    href: string,
    title: string,
    avatar: string,
    description: string,
    content: string
  }>,
  changeId: any,
  keyName: number
}

interface IState {
  load: Boolean,
  listData: Array<{
    href: string,
    title: string,
    avatar: string,
    description: string,
    content: string,
    html: string
  }>,
  listDatas: Array<{
    href: string,
    title: string,
    avatar: string,
    description: string,
    content: string,
    html: string,
    id: number,
    type: number,
  }>,
  keyName: number
}

class Home extends React.Component<IProps, IState> {
  constructor (props:any) {
    super (props);
    this.state = {
      load: false,
      listData: [
        {
          href: '',
          title: '',
          avatar: '',
          description: '',
          content: '',
          html: ''
        }
      ],
      listDatas: [
        {
          href: '',
          title: '',
          avatar: '',
          description: '',
          content: '',
          html: '',
          id: 0,
          type: 0
        }
      ],
      keyName: props.keyName
    }
  }

  public componentWillMount () {
    this.setState({
      load: true,
    })
    request('list', '', 'GET', 'fetch')
      .then((myJson: any) => {
        this.setState({
          listDatas: myJson.map((i:any) => {
            return {
              href: './detail',
              title: i.title,
              avatar: 'https://m4.tuniucdn.com/fb2/t1/G5/M00/C7/FE/Cii-tF2cUlaIaHfhAASpxa1h1fQAAbcpwGgausABKnd02.jpeg',
              description: i.author,
              content: i.describe,
              html: i.html,
              id: i.id,
              type: i.type
            };
          })
        })

        this.props.changeId(this.state.listDatas.length)
        this.setState({
          load: false,
          listData: this.state.listDatas.filter(i => {
            return i.type === this.state.keyName
          })
        })
      })
  }

  /**
   * @description 切换tab更换列表展示数据
   * @param prevProps 前props数据
   * @param prevState 前state数据
   */
  componentDidUpdate (prevProps: any, prevState: any) {
    if (this.props.keyName !== prevProps.keyName) {
      this.setState({
        listData: this.state.listDatas.filter(i => {
          return i.type === this.props.keyName
        })
      })
    }
  }

  /**
   * @description 跳转详情
   * @param url 跳转详情地址
   * @param content 详情展示数据
   */
  public clickToDetail (url: string, content: string) {
    window.localStorage.setItem('DETAIL', content)
    window.open(url)
  }

  /**
   * delete 删除
   */
  public delete(id: number) {
    id !== undefined && request('delete', {id}, 'get', 'fetch')
  }

  public render () {
    return (
      <Spin spinning={this.state.load ? true : false} indicator={antIcon}>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 6,
          }}
          dataSource={this.state.listData}
          renderItem={(item: any, index) => (
            <List.Item
              key={index}
              actions={[
                <Icon onClick={() => {this.delete(item.id)}} type="delete" style={{ marginRight: 8 }} />
              ]}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://m4.tuniucdn.com/fb2/t1/G5/M00/C7/FE/Cii-tF2cUlaIaHfhAASpxa1h1fQAAbcpwGgausABKnd02.jpeg"
                />
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<p onClick={() => {
                  this.clickToDetail(item.href, item.html)
                }}>{item.title}</p>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </Spin>
    )
  }
}

const mapStateToProps = (data: any) => {
  return{
    id: data.home.id
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    changeId : (id: number) => dispatch({
      type : 'ADD_ID',
      id
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);