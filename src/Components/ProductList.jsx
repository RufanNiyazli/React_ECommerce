import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Redux/productSlice";
import "../Css/product.css";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const { products } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.title} />
          <p>{product.title}</p>
          <span>
            {product.price}$
            <button onClick={() => navigate(`/product-details/${product.id}`)}>
              More
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
