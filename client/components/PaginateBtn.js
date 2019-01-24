import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../public/style/PaginateBtn.css'

const PaginateBtn = props => {
  const {next, prev, id} = props
  const prevVis = prev === undefined ? 'hidden' : 'visible'
  const nextVis = next === undefined ? 'hidden' : 'visible'
  return (
    <div className="paginate-btn">
      <Link 
        className="paginate-btn" 
        to={`/details/${id - 1}`} 
        style={{visibility: prevVis}}>
        <i className="big chevron left icon"></i>
      </Link>
      <Link 
        className="paginate-btn" 
        to={`/details/${id + 1}`} 
        style={{visibility: nextVis}}>
        <i className="big chevron right icon"></i>
      </Link>
    </div>
  )
}

export default PaginateBtn