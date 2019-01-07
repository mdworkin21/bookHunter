import React from 'react'
import '../public/style/NoResults.css'

const NoResults = () => {
  return (
    <div className="ui negative message no-result-container">
      <div className="header no-result-content">We're sorry, there are no results.</div>
      <p className='no-result-content' >Please try again.</p>
    </div>
  )
}

export default NoResults