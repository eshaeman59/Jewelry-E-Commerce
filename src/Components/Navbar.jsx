import { useState } from "react";
import "./Navbar.css";

import { useCart } from "../Context/CartContext";
import CartSidebar from "./CartSidebar";

function Navbar() {
  const { cartCount } = useCart();

  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">

          <div className="logo">
            VELORA
          </div>

          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">Collections</a>
            <a href="#">About</a>
          </div>

          <button
            className="cart"
            onClick={() => setIsCartOpen(true)}
            aria-label="Open shopping cart"
          >
            🛍️
            <span>{cartCount}</span>
          </button>

        </div>
      </nav>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
}

export default Navbar;