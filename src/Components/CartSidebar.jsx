import "./CartSidebar.css";
import { useCart } from "../Context/CartContext";

function CartSidebar({ isOpen, onClose }) {
  const {
    cartItems,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <>
      {/* Dark Overlay */}
      {isOpen && (
        <div
          className="cart-overlay"
          onClick={onClose}
        ></div>
      )}

      {/* Cart Sidebar */}
      <aside className={`cart-sidebar ${isOpen ? "open" : ""}`}>

        {/* Header */}
        <div className="cart-header">
          <div>
            <p className="cart-label">YOUR BAG</p>
            <h2>Shopping Cart</h2>
          </div>

          <button
            className="cart-close"
            onClick={onClose}
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        {/* Cart Items */}
        <div className="cart-items">

          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-icon">🛍️</div>

              <h3>Your cart is empty</h3>

              <p>
                Discover something beautiful from our collection.
              </p>

              <button
                className="continue-shopping"
                onClick={onClose}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item" key={item.id}>

                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />

                {/* Product Details */}
                <div className="cart-item-details">

                  <p className="cart-item-category">
                    {item.category}
                  </p>

                  <h3 className="cart-item-name">
                    {item.name}
                  </h3>

                  <p className="cart-item-price">
                    ${item.price}
                  </p>

                  {/* Quantity */}
                  <div className="cart-item-bottom">

                    <div className="quantity-control">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="remove-item"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>

                  </div>
                </div>

              </div>
            ))
          )}

        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="cart-footer">

            <div className="cart-total">
              <span>Subtotal</span>
              <strong>${cartTotal}</strong>
            </div>

            <p className="cart-note">
              Taxes and shipping calculated at checkout.
            </p>

            <button className="checkout-btn">
              Proceed to Checkout
            </button>

            <button
              className="continue-shopping-footer"
              onClick={onClose}
            >
              Continue Shopping
            </button>

          </div>
        )}

      </aside>
    </>
  );
}

export default CartSidebar;