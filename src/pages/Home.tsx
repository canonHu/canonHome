import React from 'react';
import { List, Avatar, Icon, Spin } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

// const IconText = ({ type, text }: any) => (
//   <span>
//     <Icon type={type} style={{ marginRight: 8 }} />
//     {text}
//   </span>
// );


const listDatas:Array<{
  href: string,
  title: string,
  avatar: string,
  description: string,
  content: string
}> = []

interface IProps {
  listData: Array<{
    href: string,
    title: string,
    avatar: string,
    description: string,
    content: string
  }>
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
  }>
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
      ]
    }
  }

  public componentWillMount () {
    this.setState({
      load: true
    })
    fetch('https://www.canonhu.top/list')
      .then(function(response) {
        return response.json();
      })
      .then((myJson) => {
        console.log(111, myJson);
        const arr:any = []
        myJson.map((i:any) => {
          arr.push({
            href: './detail',
            title: i.title,
            avatar: 'https://m4.tuniucdn.com/fb2/t1/G5/M00/C7/FE/Cii-tF2cUlaIaHfhAASpxa1h1fQAAbcpwGgausABKnd02.jpeg',
            description: i.author,
            content: i.describe,
            html: i.html
          });
        })
        this.setState({
          load: false,
          listData: arr
        })
      });
  }

  public clickToDetail (url: string, content: string) {
    window.localStorage.setItem('DETAIL', content)
    window.open(url)
    // detailData()
    // window.location.href = url
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
          renderItem={(item, index) => (
            <List.Item
              key={index}
              // actions={[
              //   <IconText type="star-o" text="156" key="list-vertical-star-o" />,
              //   <IconText type="like-o" text="156" key="list-vertical-like-o" />,
              //   <IconText type="message" text="2" key="list-vertical-message" />,
              // ]}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
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

export default Home;