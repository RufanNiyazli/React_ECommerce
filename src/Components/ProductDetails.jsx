import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSelectedItem } from "../Redux/productSlice"; 
import { FaCirclePlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";
import "../Css/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { selected, loading } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    
    dispatch(getSelectedItem(id));
  }, [dispatch, id]);



  return (
    <div className="detail-container">
      <div className="img">
        <img src={selected.image} alt={selected.title} />
      </div>
      <div className="product-detail">
        <h2>{selected.title}</h2>
        <p>{selected.description}</p>
        <p>{selected.price}$</p>
        <div className="count">
          <FaMinusCircle style={{ cursor: "pointer" }} onClick={decrement} />
          <span>{count}</span>
          <FaCirclePlus style={{ cursor: "pointer" }} onClick={increment} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
