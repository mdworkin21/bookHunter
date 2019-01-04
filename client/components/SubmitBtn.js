import React from 'react'

const SubmitBtn = (props) => {
  return (
    <React.Fragment>
      <button className="ui button" onClick={props.handleSubmit}>Submit</button>
    </React.Fragment>
  )
}

export default SubmitBtn