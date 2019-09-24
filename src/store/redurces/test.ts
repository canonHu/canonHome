const listData:Array<{
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

const testRed = (state: any, {num}: any) => {
  if (num === undefined) {
    num = 0
  } else {
    num ++
  }
  return {
    ...state,
    num,
    listData
  }
}

export default testRed