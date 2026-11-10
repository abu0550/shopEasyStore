import React from "react";

function ProductCard({ product }) {
  const { image, name, price, category, description, availability } = product;
  const inStock = availability === "In Stock";

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p className="price">${price.toFixed(2)}</p>
      <p className="category">{category}</p>
      <p className="description">{description}</p>
      <p className={inStock ? "in-stock" : "out-of-stock"}>{availability}</p>
      <button
        disabled={!inStock}
        onClick={() => alert(`${name} added to cart!`)}
      >
        {inStock ? "Add to Cart" : "Unavailable"}
      </button>
    </div>
  );
}

export default ProductCard;