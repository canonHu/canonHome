import {
  ADD_ID,
  HOME_LIST
} from '../types'

export const homeList = (e:any) => {
  console.log(9898, e)
  return {
    type: HOME_LIST
  }
}

export const changeId = (id: number) => {
  console.log(8, id)
  return {
    type: ADD_ID,
    id
  }
}