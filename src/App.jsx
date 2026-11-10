import React from "react";
import ProductList from "./ProductList";
import "./App.css";

import whiteTee from "./assets/whiteTee.png";
import genShirt from "./assets/genShirt.png";
import vRed from "./assets/v-RED.png";
import longSleeveTee from "./assets/longSleeve.png";
import poloTee from "./assets/greenPolo.png";
import oversizedTee from "./assets/blueRound.png";

const products = [
  {
    id: 1,
    name: "Classic White Tee",
    image: whiteTee,
    price: 19.99,
    category: "Casual",
    description: "A soft, breathable 100% cotton tee that goes with everything.",
    availability: "In Stock",
  },
  {
    id: 2,
    name: "Graphic Print Tee",
    image: genShirt,
    price: 24.99,
    category: "Streetwear",
    description: "Bold front graphic print on a relaxed-fit black tee.",
    availability: "In Stock",
  },
  {
    id: 3,
    name: "V-Neck Cotton Tee",
    image: vRed,
    price: 22.50,
    category: "Casual",
    description: "Lightweight V-neck tee, perfect for layering or wearing alone.",
    availability: "Out of Stock",
  },
  {
    id: 4,
    name: "Long Sleeve Tee",
    image: longSleeveTee,
    price: 29.99,
    category: "Casual",
    description: "Full-length sleeves with ribbed cuffs for colder days.",
    availability: "In Stock",
  },
  {
    id: 5,
    name: "Polo Tee",
    image: poloTee,
    price: 34.99,
    category: "Smart Casual",
    description: "Collared polo-style tee made from breathable piqué fabric.",
    availability: "In Stock",
  },
  {
    id: 6,
    name: "Oversized Streetwear Tee",
    image: oversizedTee,
    price: 27.99,
    category: "Streetwear",
    description: "Drop-shoulder oversized fit for an urban, relaxed look.",
    availability: "Out of Stock",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Tee-Shirt Collection</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;