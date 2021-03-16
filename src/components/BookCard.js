import React, { useContext } from "react";
// puisque on importe cartContext pour pouvoir utiliser le panier depuis ce component
// on importe le hook useContext
import { Card, Image } from "semantic-ui-react";
import { cartContext } from "../App";

export default function BookCard({ data }) {
  const { addToCart } = useContext(cartContext);
  // const context = useContext(cartContext);
  // context.addToCart;
  return (
    <Card>
      <Image src={data.image} wrapped ui={false} style={{ width: 120 }} />
      <Card.Content>
        <Card.Header>{data.title}</Card.Header>
        <Card.Meta>
          <span className="date">publié en {data.year}</span>
        </Card.Meta>
        <Card.Description></Card.Description>
      </Card.Content>
      <Card.Content extra>
        <button onClick={() => addToCart({ id: data.id, quantity: 1 })}>
          + ajouter au caddie
        </button>
      </Card.Content>
    </Card>
  );
}