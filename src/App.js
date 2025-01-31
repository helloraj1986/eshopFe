import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ProductsProvider } from "./Context/ProductsContext";
import ProductDetails from "./components/ProductsDetails";
import NavBar from "./components/NavBar";
import AddProduct from "./components/AddProduct";
// import Cart from "./pages/Cart"; // Create this file

function App() {
  return (
    <ProductsProvider>
      
    <Router>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} /> 
        <Route path="/add-product" element={<AddProduct />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </Router>
    </ProductsProvider>
  );
}

export default App;