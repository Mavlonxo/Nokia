import React from 'react'
import './Provider.css'
import { useLocation } from 'react-router-dom'


function Provider() {
  const { pathname } = useLocation()
  if (pathname.includes("/service")) {
      return <></>
  }
  if (pathname.includes("/traning")) {
    return <></>
}
if (pathname.includes("/product")) {
  return <></>
}
  return (
    <div className='provider'>
      <h1>
      Network topics for service providers
      </h1>


    </div>
  )
}

export default Provider