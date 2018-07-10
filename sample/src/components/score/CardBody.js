import React from "react";

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

const CardBody = props => (
  <div className="card-body">
    <p> {props.count}</p>
    {/* <button className="btn btn-primary" onClick={props.handleIncrement}>
    </button>{" "} */}
  </div>
);

export default CardBody;
