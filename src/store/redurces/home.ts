import {
  CHANGE_TYPE
} from '../types'

const homeData = (state: any, actions: any) => {
  switch (actions.id) {
    case CHANGE_TYPE:
      
      return {
        ...state,
        id: actions.id
      }
  
    default:
      return {
        ...state,
        id: 0
      }
  }
}

export default homeData