import React from 'react'
import '../public/style/LoadSpinner.css'

const LoadSpinner = () => {
  return (
      <div className="ui segment" id="loadSpinContainer" >
        <div className="ui active dimmer">
          <div className="ui text loader">Loading Search Results</div>
        </div>
        <p></p>
      </div>
  )
}

export default LoadSpinner