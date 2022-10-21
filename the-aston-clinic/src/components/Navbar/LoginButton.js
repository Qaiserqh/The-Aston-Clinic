import React from 'react'
import {Button} from '../Button/Button'
import DropDown from './DropDown'

function LoginButton() {
  const user = JSON.parse(localStorage.getItem('currentUser'))
  return (
    <div>
      {user ? (
        <DropDown />
      ) : (
        <a href='/login'>
          <Button>Login</Button>
        </a>
      )}
    </div>
  )
}

export default LoginButton