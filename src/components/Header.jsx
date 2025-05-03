import { useContext } from "react";

import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button.jsx";
import CartContext from "../store/CartContext.jsx";

export default function Header() {
  const cartCtx = useContext(CartContext);

  const totalItemsInCart = cartCtx.items.reduce((total, item) => {
    return total + item.quantity;
  }
  , 0);

  return (
    <header id='main-header'>
      <div id='title'>
        <img src={logoImg} alt='Food and drinks' />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalItemsInCart})</Button>
      </nav>
    </header>
  );
}
