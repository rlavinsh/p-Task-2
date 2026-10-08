import ProductCard from "./components/ProductCard";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    category: "Audio",
    emoji: "🎧",
    inStock: true,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2499,
    category: "Wearables",
    emoji: "⌚",
    inStock: true,
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 1799,
    category: "Fashion",
    emoji: "👟",
    inStock: false,
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 2999,
    category: "Accessories",
    emoji: "⌨️",
    inStock: true,
  },
];

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <h1>ShopEase</h1>
        <p>Discover your next favourite product.</p>
      </header>

      <main className="container">
        <h2>Featured Products</h2>

        <div className="product-grid">
          <ProductCard />
        </div>
      </main>
    </div>
  );
}

export default App;
