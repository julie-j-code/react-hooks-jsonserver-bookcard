import React, { useContext } from "react";
import { CartContext } from "../App";
import { Header, Table, Icon } from "semantic-ui-react";

export default function CartDetails() {
    // à récupérer depuis le context
    const { cart, addToCart, removeFromCart, emptyCart } = useContext(CartContext);
    return (
        <>
            {/* <div>{JSON.stringify(cart, null, 4)}</div> */}

            <button onClick={emptyCart}>vider le caddie</button>
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
                                {/* <Header as="h2" textAlign="center">
                                    <button onClick={() => removeFromCart(cart[key])}>-</button>{" "}
                                    <button onClick={() => addToCart(cart[key])}>+</button>{" "}
                                    {cart[key].quantity}
                                </Header> */}
                                <Icon
                                    name="minus square outline"
                                    onClick={() => removeFromCart(cart[key])}
                                    style={{ cursor: "pointer" }}
                                />
                                {cart[key].quantity}{" "}
                                <Icon
                                    name="plus square outline"
                                    onClick={() => addToCart(cart[key])}
                                    style={{ cursor: "pointer" }}
                                />
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