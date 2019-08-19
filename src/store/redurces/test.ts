const testRed = (state: any, actions: any) => {
  switch (actions.type) {
    case 'ADD_ONE':
      return {
        ...state, 
        num: actions.num
      }
  
    default:
      return {
        ...state
      }
  }
}

export default testRed