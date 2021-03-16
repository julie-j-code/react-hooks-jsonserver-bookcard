import React, { useContext } from "react";
import { CartContext } from "../App";
import { Header, Table, Icon } from "semantic-ui-react";

export default function CartDetails() {
  const { cart } = useContext(CartContext);
  return (
    <>
      {/* <div>{JSON.stringify(cart, null, 4)}</div> */}

      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine textAlign="center">
              Quantité
            </Table.HeaderCell>
            <Table.HeaderCell>Titre</Table.HeaderCell>
            <Table.HeaderCell textAlign="right">Prix unitaire</Table.HeaderCell>
            <Table.HeaderCell textAlign="right">Prix total</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {Object.keys(cart).map(key => (
            //   ne pas oublier d'ajouter une clée unique pour chaque row
            <Table.Row key={cart[key].id}>
              <Table.Cell>
                <Header as="h2" textAlign="center">
                  {cart[key].quantity}
                </Header>
              </Table.Cell>
              <Table.Cell singleLine>{cart[key].title}</Table.Cell>
              <Table.Cell textAlign="right">{cart[key].price} €</Table.Cell>
              <Table.Cell textAlign="right">
                {cart[key].quantity * cart[key].price} €
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

    </>
  );
}