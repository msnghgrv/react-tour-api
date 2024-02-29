import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour}) => {
  const [readMore, setReadmore] = useState(false);
  
  return (
    <article>
      <img src={image} alt="name" />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(200)}...`}
        <button  onClick={()=> setReadmore(!readMore)}>
          {readMore ? "show less" : "read more"}
        </button></p>
        <button className="btn" onClick={()=> removeTour(id)}>not intrested</button>
      </footer>
    </article>  
  );
};

export default Tour;
