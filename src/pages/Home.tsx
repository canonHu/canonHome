import React from 'react';
import { List, Avatar, /* Icon */ } from 'antd';

// fetch('https://www.canonhu.top/list')
//   .then(function(response) {
//     console.log(123, response)
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(111, myJson);
//   });

// fetch('https://www.canonhu.top/save', {
//   body: JSON.stringify({
//     name: 'hujianeng',
//     html: '<p>123</p>'
//   }), // must match 'Content-Type' header
//   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//   credentials: 'same-origin', // include, same-origin, *omit
//   headers: {
//     'user-agent': 'Mozilla/4.0 MDN Example',
//     'content-type': 'application/json'
//   },
//   method: 'POST', // *GET, POST, PUT, DELETE, etc.
//   mode: 'cors', // no-cors, cors, *same-origin
//   redirect: 'follow', // manual, *follow, error
//   referrer: 'no-referrer', // *client, no-referrer
// })
// .then(response => response.json())
// .then(res => {
//   console.log(1113, res);
// })


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

  componentWillMount () {
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
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description: i.author,
            content: i.describe,
            html: i.html
          });
        })
        this.setState({
          listData: arr
        })
      });
  }

  clickToDetail (url: string, content: string) {
    window.localStorage.setItem('DETAIL', content)
    window.open(url)
    // detailData()
    // window.location.href = url
  }

  render () {
    return (
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
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
    )
  }
}

export default Home;