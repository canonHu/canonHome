import {
  ADD_ID
} from '../types'

const editData = (state: any, actions: any) => {
  switch (actions.type) {
    case ADD_ID:
      
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

export default editData