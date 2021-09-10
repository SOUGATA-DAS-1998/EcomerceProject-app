import React from "react";

export default function Product(props) {

    const {products} = props;
    return (
        <div key={products._id} className="card">
            <a href={`/product/${products._id}`}>
                <img className="medium" 
                src={products.images} 
                alt={products.name}
                />
            </a>
            <div className="card-body">
            <a href={`/product/${products._id}`}>
                    <h2>{products.name}</h2>
                </a>
            </div>
            
            <div className="price">
                Rs:{products.price}
            </div>
        </div>
    )
}























