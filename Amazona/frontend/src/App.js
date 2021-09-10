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
            <Product key={products._id1} products={products}></Product>
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
