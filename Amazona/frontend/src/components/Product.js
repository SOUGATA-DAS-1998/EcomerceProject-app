import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function Product(props) {
  const { products } = props;
  return (
    <div key={products._id} className="card">
      <Link to={`/product/${products._id}`}>
        <img className="medium" src={products.images} alt={products.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${products._id}`}>
          <h2>{products.name}</h2>
        </Link>
      </div>
      <Rating
        rating={products.rating}
        numReviews={products.numReviews}
      ></Rating>
      <div className="row">
      <div className="price">Rs:{products.price}</div>
      {/* Seller part start */}
      <div>
        <Link to={`/seller/${products.seller._id}`}>
          {products.seller.seller.name}
        </Link>
      </div>
      {/* End Seller Part */}
      </div>
    </div>
  );
}
