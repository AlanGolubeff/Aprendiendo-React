import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import { withTheme } from "@emotion/react";

const Shop = () => {
  return (
    <div style={{ display: "flex" }}>
      <AddShoppingCartIcon sx={{ color: "white" }} />
      <span style={{ color: "white" }}>3</span>
    </div>
  );
};

export default Shop;
