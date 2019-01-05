import React from 'react'

const Button = (props) => {
  return (
    <React.Fragment>
      <button disabled={props.disabled} className="ui button" onClick={props.clickEvent}>{props.buttonName}</button>
    </React.Fragment>
  )
}

export default Button