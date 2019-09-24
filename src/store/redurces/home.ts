let listData:Array<{
  href: string,
  title: string,
  avatar: string,
  description: string,
  content: string
}> = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: './detail',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

// fetch('https://www.canonhu.top/list')
//   .then(function(response) {
//     console.log(123, response)
//     return response.json();
//   })
//   .then(function(myJson) {

//     console.log(111, myJson);
//     listData = myJson.map((i:any, index:number) => {
//       listData.push({
//         href: './detail',
//         title: i.title,
//         avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//         description: i.author,
//         content: i.describe
//       });
//     })
//   });

const homeList = (state: any, {num}: any) => {
  return {
    ...state,
    listData
  }
}

// const detailData = (state: any, actions: any) => {
//   console.log(890, actions)
//   return {
//     ...state
//   }
// }

export default homeList