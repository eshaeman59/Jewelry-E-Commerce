import "./ProductCard.css";
import { useCart } from "../Context/CartContext";
function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        {/* Quick Action */}
        <button className="quick-view">
          Quick View
        </button>
      </div>

      {/* Product Information */}
      <div className="product-info">
        <p className="product-category">
          {product.category}
        </p>

        <h3 className="product-name">
          {product.name}
        </h3>

        <p className="product-price">
          ${product.price}
        </p>

        {/* Buttons */}
        <div className="product-actions">
        <button
  className="add-cart-btn"
  onClick={() => addToCart(product)}
>
  Add to Cart
</button>

          <button className="buy-now-btn">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;