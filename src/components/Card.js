import React from "react";
import location from "../images/location-image.png";

const Card = (props) => {
  console.log(props)
  return (
    <div className="card">
      <div className="image-div">
        <img
          className="card-image"
          src={props.imageUrl}
          alt="profile"
        />
      </div>
      <div className="info">
        <div className="info-div">
          <img className="location-image" src={location} alt="location" />
          <span className="country">{props.location} </span>
          <a classname='country-link' href={props.googleMapsUrl}>View Google Maps</a>
        </div>
        <div className="content">
        <h1 className="content-header">{props.title}</h1>
          <span className="sub-text">{props.startDate}</span>
          <span className="sub-text">-</span>
          <span className="sub-text">{props.endDate}</span>
          <p className="context-text">{props.description}</p>   
        </div>
        
      </div>
      {/* <hr className='border-div'/> */}
    </div>
     
  );
};

export default Card;
