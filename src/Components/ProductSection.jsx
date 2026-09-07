import { useState } from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";
import "./ProductSection.css";

function ProductSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
const [searchTerm, setSearchTerm] = useState("");


  const categories = [
    "All",
    "Rings",
    "Bracelets",
    "Pendants",
    "Jewelry Sets",
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;
  
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase());
  
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="products-section">


      <div className="products-container">

        {/* Section Heading */}
        <div className="products-heading">
          <p className="products-subtitle">OUR COLLECTION</p>

          <h2>Featured Pieces</h2>

          <p className="products-description">
            Discover our carefully selected jewelry pieces,
            designed to bring effortless elegance to your
            everyday style.
          </p>
        </div>

        <div className="product-search">
  <input
    type="text"
    placeholder="Search jewelry..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProductSection;