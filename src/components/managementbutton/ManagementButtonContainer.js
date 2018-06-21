import { connect } from 'react-redux'
import ManagementButton from './ManagementButton'
import { loginUser } from './ManagementButtonActions'

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

const ManagementButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagementButton)

export default ManagementButtonContainer
