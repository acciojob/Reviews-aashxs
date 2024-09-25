import React from 'react'


const Review = ({ name, id, image, text, job }) => {
    return (
      <article className="review">
        <div>
          <img src={image} alt={name} />
          <h4 id={`author-${id}`}>{name}</h4>
          <p>{job}</p>
          <p>{text}</p>
        </div>
      </article>
    );
  };
  
  export default Review;
  