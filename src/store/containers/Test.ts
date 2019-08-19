import { connect } from 'react-redux'
import { testRedurce } from '../actions/test'
import Test from '../../components/Test'

const mapStateToProps = (data: any) => {
  return{
    num: data.test.num
  }
}

const mapDispatchToProp = (dispatch: any, ownProp: any) => ({
  onClick: (num: number) => dispatch(testRedurce(num))
})

export default connect(mapStateToProps, mapDispatchToProp)(Test)