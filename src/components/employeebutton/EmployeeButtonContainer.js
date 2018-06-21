import { connect } from 'react-redux'
import EmployeeButton from './EmployeeButton'
import { loginUser } from './EmployeeButtonActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginUserClick: (event) => {
      event.preventDefault();

      dispatch(loginUser())
    }
  }
}

const EmployeeButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeButton)

export default EmployeeButtonContainer
