import React from 'react'
import '../public/style/NoResults.css'

const Err = (props) => {
  let message 
    if (props.error.response.status === 500){
      message = "Our Bad!"
    } else if (props.error.response.status === 400){
      message = "This might be something on your end, check internet connection."
    }
  return (
    <div className="ui negative message no-result-container">
      <div className="header no-result-content">We're sorry, there's a {props.error.response.status} error. </div>
      <p className='no-result-content' >({props.error.response.statusText})</p>
      <p className='no-result-content' >{message}</p>
      <p className='no-result-content' >Please Refresh Page.</p>
    </div>
  )
}

export default Err