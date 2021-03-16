import React, { useContext } from "react";
import { CartContext } from "../App";

export default function CartSummary() {
  const { countCartArticles } = useContext(CartContext);
  return (
    <>
      <h4>Caddie ({countCartArticles()})</h4>
    </>
  );
}