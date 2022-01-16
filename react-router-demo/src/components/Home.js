import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      Home Page
      <button onClick={() => navigate("order-summary")}>Place Order</button>
      <button onClick={() => navigate("order-summary", { replace: true })}>
        Place Order 1
      </button>
    </div>
  );
};
