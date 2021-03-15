import React from "react";
import "./App.css";
import BookList from "./components/BookList";
import CartSummary from "./components/CartSummary";

// pour le menu et son container
import { Container, Menu, Icon } from "semantic-ui-react";

function App() {
  return (
    <>
      <h1>React Campus Shop</h1>
      <Container>
        <Menu stackable>
          <Menu.Item>Campus Shop</Menu.Item>
          <Menu.Item>
            <CartSummary></CartSummary>
          </Menu.Item>
        </Menu>
      </Container>
      <BookList />
    </>
  );
}

export default App;
