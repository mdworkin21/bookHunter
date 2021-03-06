import React from 'react'
import '../public/style/LoadSpinner.css'

const LoadSpinner = () => {
  return (
      <div className="ui segment" id="load-spinner">
        <div className="ui active dimmer">
          <div className="ui text loader">Loading Search Results</div>
        </div>
      </div>
  )
}

export default LoadSpinner