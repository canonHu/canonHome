import {
  ADD_ID,
  TRANSMIT
} from '../types'

const editData = (state: any, actions: any) => {
  switch (actions.type) {
    case ADD_ID:
      
      return {
        ...state,
        id: actions.id
      }

    case TRANSMIT:

      return {
        ...state,
        editorState: actions.editorState
      }
  
    default:
      return {
        ...state,
        editorState: null,
        id: 0
      }
  }
}

export default editData