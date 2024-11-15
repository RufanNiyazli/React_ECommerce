import React from "react";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../Redux/basketSlice";
import "../Css/Drawer.css";
function DrawerComponent() {
  const { products, drawer } = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  return (
    <div>
      <Drawer
        anchor="right"
        style={{ width: "500px" }}
        onClose={() => {
          dispatch(setDrawer());
        }}
        open={drawer}
        className="drawer"
      >
        {products &&
          products.map((product) => (
            <div
            className="drawer"
              key={product.id}
              style={{ padding: "10px", borderBottom: "1px solid #ccc" }}
            >
              <h2>{product.name}</h2>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
          ))}
      </Drawer>
    </div>
  );
}

export default DrawerComponent;
