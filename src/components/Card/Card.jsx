import React from 'react';
import admission_services from "../../assets/admission_services.jpg"
const Card = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={admission_services} className="card-img-top" alt="Item Image" />
      <div className="card-body">
        <h5 className="card-title">Item Name</h5>
        <p className="card-text">This is a short description of the item. It provides an overview of the item's features and benefits.</p>
        <p className="card-text"><strong>Price:</strong> $99.99</p>
        <a href="#" className="btn btn-primary">Buy Now</a>
      </div>
    </div>
  );
}

export default Card;
