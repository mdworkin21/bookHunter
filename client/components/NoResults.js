import React from 'react'

const NoResults = () => {
  return (
    <div className="ui negative message" style={{marginTop: '8vh'}}>
      <div className="header">
        We're sorry, there are no results for that search.
      </div>
      <p>Please try again.</p>
    </div>
  )
}

export default NoResults