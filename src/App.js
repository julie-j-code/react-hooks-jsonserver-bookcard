import React, { useState, createContext } from "react";
import "./App.css";
import BookList from "./components/BookList";
import CartSummary from "./components/CartSummary";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CartDetails from "./components/CartDetails";

// pour le menu et son container
import { Container, Menu, Icon } from "semantic-ui-react";

export const CartContext = createContext();

function App() {
  // finira par être un tableau d'objets, mais pour le moment, n'est qu'un tableau vide
  // const [cart, setCart] = useState([]);
  const [cart, setCart] = useState({});

  function addToCart(item) {
    console.log("item", item);
    if (!cart[item.id]) {
      cart[item.id] = item;
      cart[item.id].quantity = 1;
    } else {
      cart[item.id].quantity += 1;
    }
    setCart({ ...cart });
  }

  function countCartArticles() {
    let total = 0;
    Object.keys(cart).map(key => (total += cart[key].quantity));
    return total;
  }

  function removeFromCart(item) {
    if (cart[item.id].quantity !== 1) {
      cart[item.id].quantity = cart[item.id].quantity - 1;
    } else {
      delete cart[item.id];
    }
    setCart({ ...cart });
    console.log("cart", cart);
  }

  // const contextValue = { cart, addToCart, countCartArticles:countCartArticles };
  const contextValue = { cart, addToCart, countCartArticles, removeFromCart };


  return (
    <>
      <Router>
        <CartContext.Provider value={contextValue}>
          <Container>
            <Menu stackable>
              <Menu.Item>
                <Link to="/">Campus Shop</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/cart">
                  <CartSummary />
                </Link>
              </Menu.Item>
            </Menu>
          </Container>
          <Switch>
            <Route path="/cart" component={CartDetails} />
            <Route path="/" component={BookList} />
          </Switch>
        </CartContext.Provider>
      </Router>
    </>
  );
}

export default App;
