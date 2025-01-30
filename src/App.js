import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ProductsProvider } from "./Context/ProductsContext";
import ProductDetails from "./components/ProductsDetails";
// import Cart from "./pages/Cart"; // Create this file

function App() {
  return (
    <ProductsProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} /> 
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </Router>
    </ProductsProvider>
  );
}

export default App;