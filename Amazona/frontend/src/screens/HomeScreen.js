// import React, { useEffect, useState } from "react";
import React, { useEffect } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// import axios from "axios";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useParams } from "react-router";
// import data from "../data";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { listTopSellers } from "../actions/userActions";
import { Link } from "react-router-dom";

export default function HomeScreen() {
  // all hooks section::

  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  
  const {
    pageNumber=1
  }=useParams();

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products,page, pages } = productList;

  // seller part
  const userTopSellersList = useSelector((state) => state.userTopSellersList);
  const {
    loading: loadingSellers,
    error: errorSellers,
    users: sellers,
  } = userTopSellersList;
//seller part end

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     setLoading(true);
    //     const { data } = await axios.get("/api/products");
    //     setLoading(false);
    //     setProducts(data);
    //   } catch (err) {
    //     setError(err.message);
    //     setLoading(false);
    //   }
    // };
    // fetchData();
    dispatch(listProducts({ pageNumber, }));
    dispatch(listTopSellers());   //Seller part
  }, [dispatch, pageNumber]);
  return (
    <div>
      {/* seller section start */}
      <h2>Top Sellers</h2>  
      {loadingSellers ? (
        <LoadingBox></LoadingBox>
        ) : errorSellers ? (
          <MessageBox variant="danger">{errorSellers}</MessageBox>
          ) : (
            <>
          {sellers.length === 0 && <MessageBox>No Seller Found</MessageBox>}
        <Carousel showArrows autoPlay showThumbs={false}>
        {sellers.map((seller)=>(
          <div key={seller._id}>
            <Link to={`/seller/${seller._id}`}>
              <img src={seller.seller.logo} alt={seller.seller.name} />
              <p className="legend">{seller.seller.name}</p>
            </Link>
          </div>
        ))}
        </Carousel>
        </>
      )}
      {/* Seller end */}
      <h2>Featured Products</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {products.map((products) => (
              <Product key={products._id} products={products}></Product>
            ))}
          </div>
          <div className="row center pagination">
        {[...Array(pages).keys()].map((x) => (
          <Link
            className={x + 1 === page ? 'active' : ''}
            key={x + 1}
            to={`/pageNumber/${x + 1}`}
          >
            {x + 1}
          </Link>
        ))}
      </div>
        </>
      )}
    </div>
  );
}
