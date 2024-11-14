import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSelectedItem } from "../Redux/productSlice";
import { FaCirclePlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";
import "../Css/ProductDetails.css";
import { addToBasket } from "../Redux/basketSlice";

function ProductDetails() {
  const { id } = useParams();
  const { selected, loading } = useSelector((store) => store.product);
  const{price,image,title,description}=selected
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

  const addBasket = () => {
    const payload = {
      id,
      price,
      title,
      count
    };
    dispatch(addToBasket(payload));
  };

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
        <button onClick={addBasket}>Basket</button>
      </div>
    </div>
  );
}

export default ProductDetails;
