import React from "react";
import { Card, Image } from "semantic-ui-react";

export default function BookCard({ data }) {
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
        <button>+ ajouter au caddie</button>
      </Card.Content>
    </Card>
  );
}