import React from 'react'
import CL from '../commandLine/CL'
import "../../styles/Home.css"
function Main(props) {
  return (
    <div className='Home'>
      
    <CL name={props.name} />
    </div>
  )
}

export default Main