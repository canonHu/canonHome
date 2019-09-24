import { connect } from 'react-redux'
// import { homeList } from '../actions/home'
// import { HOME_LIST } from '../types'
import Home from '../../pages/Home'

const mapStateToProps = (data: any) => {
  console.log(999, data)
  return{
    num: data.test.num,
    listData: data.home.listData
  }
}

// const mapDispatchToProp = (dispatch: any, ownProp: any) => ({
//   onClick: () => dispatch(homeList)
// })

export default connect(mapStateToProps)(Home)