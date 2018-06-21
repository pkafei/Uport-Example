import { uport } from '../../utilities/uportSetup.js'
import { browserHistory } from 'react-router'

export const EMPLOYEE_LOGGED_IN = 'EMPLOYEE_LOGGED_IN'
function userLoggedIn(user) {
  return {
    type: EMPLOYEE_LOGGED_IN,
    payload: user
  }
}

export function loginEmployee() {
  return function(dispatch) {
    // UPort and its web3 instance are defined in ./../../../util/wrappers.
    // Request uPort persona of account passed via QR
    uport.requestCredentials().then((credentials) => {
      dispatch(userLoggedIn(credentials))

      // Used a manual redirect here as opposed to a wrapper.
      // This way, once logged in a user can still access the home page.
      var currentLocation = browserHistory.getCurrentLocation()

      if ('redirect' in currentLocation.query)
      {
        return browserHistory.push(decodeURIComponent(currentLocation.query.redirect))
      }

      return browserHistory.push('/employee')
    })
  }
}
