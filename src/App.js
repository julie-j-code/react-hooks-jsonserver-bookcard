import React, { useState, createContext, useEffect } from "react";
import "./App.css";
import BookList from "./components/BookList";
import CartSummary from "./components/CartSummary";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CartDetails from "./components/CartDetails";

// pour le menu et son container
import { Container, Menu, Icon, Segment, Header } from "semantic-ui-react";

export const CartContext = createContext();

// pour localStorage 
const CART_KEY = "react-shop";

function App() {

  const [cart, setCart] = useState({});
  // morceau d'état dédié au comptage des articles. 
  // qui n'est autre qu'un compteur, dont la valeur par défaut est donc 0
  const [nbArticles, setNbArticles] = useState(0);

  // on souhaite que useEffect ne s'execute que lorsque notre component est monté
  // pour ça, on utilise en deuxième argument un tableau vide []
  useEffect(() => {
    const cartFromStorage = localStorage.getItem(CART_KEY);
    if (cartFromStorage !== null) {
      setCart(JSON.parse(cartFromStorage));
    }
  }, []);

  // le deuxième useEffect permet d'insérer du contenu dans localStorage
  useEffect(() => {
    // on ne peut mettre que des strings dans localStorage
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    // document.title = `caddie(${Object.keys(cart).length})`;
    //   document.title = `caddie(${countCartArticles()})`;
    // }, [cart, countCartArticles]);
    // au lieu d'utiliser une fonction dédiée, on va utiliser un morceau d'état dédié au comptage des articles
    document.title = `caddie(${nbArticles})`;
  }, [cart, nbArticles]);



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
    setNbArticles(total);
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

  function emptyCart() {
    const response = window.confirm(
      "Etes-vous vous sûr de vouloir vider le caddie ? "
    );
    if (response) {
      setCart({});
    }
  }

  // const contextValue = { cart, addToCart, countCartArticles:countCartArticles };
  const contextValue = { cart, addToCart, countCartArticles, removeFromCart, emptyCart };


  return (
    <>
      <Router>
        <CartContext.Provider value={contextValue}>
          <Container>
            <Menu stackable>
              <Menu.Item>
                <Link to="/">React Campus Shop</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/cart">
                  <Icon name="cart" size="small" /> <CartSummary />
                </Link>
              </Menu.Item>
            </Menu>
            <Header as='h2' attached='top'>
              React Hooks Books Shop
    </Header>
            <Segment attached>
              L'occasion de travailler avec des Hooks, moi qui ne connaissais que l'utilisation des class components. Je préfère ne pas donner mon avis. S'agit de se mettre en conformité avec les pré-requis du marché du travail. Ici, useState, useEffect et surtout useContext. Le panier est enregistré dans localStorage. La data fournie par json-server. Le style importé de semantic-ui que je découvrais là aussi.
    </Segment>
            <Switch>
              <Route path="/cart" component={CartDetails} />
              <Route path="/" component={BookList} />
            </Switch>
          </Container>
        </CartContext.Provider>
      </Router>
    </>
  );
}

export default App;
