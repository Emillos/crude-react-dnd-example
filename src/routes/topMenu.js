import React from 'react'
import LogIn from './login'
import { A } from 'hookrouter'

const TopMenu = () => {
  return (
    <div className='topMenu'>
      <A href='/' className='home'>Home</A>
      <LogIn />
    </div>
  )
}

export default TopMenu