import React from 'react'
import { A } from 'hookrouter'

const DashBoard = () => {
  return (
    <div>
      <p>Movies</p>
      <A href='/bloodsport' className='routerLink'>
        bloodsport
      </A>
    </div>
  )
}

export default DashBoard