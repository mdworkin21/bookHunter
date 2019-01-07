import React from 'react'
import '../public/style/LoadSpinner.css'

const LoadSpinner = () => {
  return (
      <div class="ui segment loadSpinner">
        <div class="ui active  dimmer">
          <div class="ui text loader">Loading Search Results</div>
        </div>
        <p></p>
      </div>
  )
}

export default LoadSpinner