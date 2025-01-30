import { useState, useEffect } from "react";
import Grid from '@mui/material/Grid2';
import axios from "axios";
import ProductCard from "./ProductCard";
import {useProductsContext} from '../Context/ProductsContext';


const fetchProducts = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/products");
    const result = response.data;
    return result
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const {updateProductContextProps} = useProductsContext();

  useEffect(() => {
    let isMounted = true;
  
    const getProducts = async () => {
      const data = await fetchProducts();
      if (isMounted) {
        setProducts(data);
        updateProductContextProps({ allProducts: data });
      }
    };
  
    getProducts();
  
    return () => {
      isMounted = false; // Cleanup function to prevent state updates after unmount
    };
  }, []);


  return (
    <>
    {products.length === 0 ? "Loading..." : <div className="container mx-auto p-4">
      <Grid container spacing={3}>
        {products.map((product, index) => (
          <ProductCard product={product}/>
        ))}
      </Grid>
    </div>
 
    }
    </>
  );
};

export default ProductList;