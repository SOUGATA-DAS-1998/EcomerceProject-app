import React from 'react';
import data from './data';

function App() {
  return (
    <div className="grid-container">
    <header className="row">
    <div> 
        <a className="brand" href="/">Das_Shoping</a>
    </div>
    <div>
        <a href="/cart">Cart</a>
        <a href="/signin">Sign In</a>
    </div>
</header>
<main>
  <div>

    <div className="row center">
        {
          data.products.map(products =>(
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
            <div className="rating">
                <span><i className="fa fa-star"></i></span>
                
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star-o"></i></span>
            </div>
            <div className="price">
                Rs:{products.price}
            </div>
        </div>
          ))
        }
        
      </div>
    </div>


</main>
<footer className="row foot">
    All Right Reserved
</footer>
</div>
  );
}

export default App;
