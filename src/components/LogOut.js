// Frameworks
import React, { Component } from 'react'
import styled from 'styled-components'

const LogOutWrap = styled.section``

class LogOut extends Component {
  render () {
    return (
      <LogOutWrap>
        <h4>Log out</h4>
        <h6>Bye, good folks!</h6>
      </LogOutWrap>
    )
  }
}

export default LogOut