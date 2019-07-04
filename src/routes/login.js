import React from 'react'
import { AuthContext } from '../context/initContext'

const handleAuthenticateUser = (authenticateUser, status) => {
  return authenticateUser(status)
}

const LogIn = () => {
  return (
    <AuthContext.Consumer>
      {({ authenticated, authenticateUser }) => (
        <div className='login'>
          {authenticated === true ?
            <div>
              <button onClick={() => handleAuthenticateUser(authenticateUser, false)}>LOG OUT</button>
            </div>
            :
            <div>
              <button onClick={() => handleAuthenticateUser(authenticateUser, true)}>LOG IN</button>
            </div>
          }
        </div>
      )}
    </AuthContext.Consumer>
  )
}

export default LogIn