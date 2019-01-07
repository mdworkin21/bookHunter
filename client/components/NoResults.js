import React from 'react'

const NoResults = () => {
  return (
    <div className="ui negative message" style={{marginTop: '8vh', paddingLeft: '35%'}}>
      <div className="header">
        We're sorry, there are no results.
      </div>
      <p style={{paddingLeft: '10%'}}>Please try again.</p>
    </div>
  )
}

export default NoResults