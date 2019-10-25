import React from 'react';
import { connect } from 'react-redux'
import request from '../utils/request'
import { List, Avatar, Icon, Spin } from 'antd';
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

// const IconText = ({ type, text, id }: any) => (
//   <span>
//     <Icon onClick={this.delete(id)} type={type} style={{ marginRight: 8 }} />
//     {text}
//   </span>
// );


// const listDatas:Array<{
//   href: string,
//   title: string,
//   avatar: string,
//   description: string,
//   content: string
// }> = []

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
      keyName: 0
    }
  }

  public componentWillMount () {
    this.setState({
      load: true,
      keyName: this.props.keyName
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

  public componentWillUpdate(nextProps: any, nextState: any) {
    // nextState.listData = 
    // nextState({
    //   listData: this.state.listDatas.filter(i => {
    //     return i.type === nextProps.keyName
    //   })
    // })
    console.log(123, nextProps, nextState)
  }

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
          // footer={
          //   <div>
          //     <b>ant design</b> footer part
          //   </div>
          // }
          renderItem={(item: any, index) => (
            <List.Item
              key={index}
              actions={[
                <Icon onClick={() => {this.delete(item.id)}} type="delete" style={{ marginRight: 8 }} />
                // <IconText id={item.id} type="delete" text="" key="list-vertical-delete" />,
                // <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                // <IconText type="message" text="2" key="list-vertical-message" />,
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