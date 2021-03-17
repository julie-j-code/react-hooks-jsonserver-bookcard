import React, { useContext } from "react";
// puisque on importe cartContext pour pouvoir utiliser le panier depuis ce component
// on importe le hook useContext
import { Card, Image, Button, Icon } from "semantic-ui-react";
import { CartContext } from "../App";

export default function BookCard({ data }) {
  const { addToCart } = useContext(CartContext);
  // const context = useContext(CartContext);
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
        {/* <button onClick={() => addToCart({ id: data.id, quantity: 1 })}>
          + ajouter au caddie
        </button> */}
        {/* <button onClick={() => addToCart(data)}>+ ajouter au caddie</button> */}
        <Button animated='vertical' onClick={() => addToCart(data)}>
          <Button.Content hidden>+</Button.Content>
          <Button.Content visible>
            <Icon name='shop' />
          </Button.Content>
        </Button>
      </Card.Content>
    </Card>
  );
}