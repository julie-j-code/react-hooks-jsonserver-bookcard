import React, { useContext } from "react";
import { CartContext } from "../App";

export default function CartDetails() {
  const { cart } = useContext(CartContext);
  return (
    <>
      <div>{JSON.stringify(cart, null, 4)}</div>
    </>
  );
}