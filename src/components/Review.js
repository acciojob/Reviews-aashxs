import React from 'react'

const Review = (props) => {
  return (
    <div className="review">
      <p className='author' id={`author-id${props.id}`}>{props.name}</p>
      <p className='job'>{props.job}</p>
      <img style={{
        width:"100px"
      }} className='person-img' src={props.image} alt=""/>
      <p className='info'>{props.text}</p>
    </div>
  )
}

export default Review