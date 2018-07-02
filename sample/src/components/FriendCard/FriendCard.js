import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div onClick={() => props.moveFriend(props.id)} className="card" >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">        
          <strong>Name:</strong> {props.name}
    </div>
  </div>
);

export default FriendCard;
