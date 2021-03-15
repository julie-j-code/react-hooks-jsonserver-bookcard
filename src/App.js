import React, {useState, createContext} from "react";
import "./App.css";
import BookList from "./components/BookList";
import CartSummary from "./components/CartSummary";

// pour le menu et son container
import { Container, Menu, Icon } from "semantic-ui-react";

export const cartContext=createContext();

function App() {
  // finira par être un tableau d'objets, mais pour le moment, n'est qu'un tableau vide
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    console.log("item", item);
    setCart([...cart, item]);
    console.log("cart", cart);
  }

  const contextValue = { cart, addToCart };

  return (
    <>
      <h1>React Campus Shop</h1>
      <Container>
        <Menu stackable>
          <Menu.Item>Campus Shop</Menu.Item>
          <Menu.Item>
            {/* CartSummary qui doit pouvoir être accessible depuis n'importe lequel des components...
            d'où l'intérêt d'avoir recours à Context... */}
            <CartSummary></CartSummary>
          </Menu.Item>
        </Menu>
      </Container>
      <BookList />
    </>
  );
}

export default App;
