import React, { useState, createContext, useContext } from 'react';

const initialState = {
    allProducts: [],
}

export const ProductsContext = createContext();
export const useProductsContext = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
    const [productContextData, setProductsContextData] = useState(initialState);

    function updateProductContextProps(props) {
        setProductsContextData({ ...productContextData, ...props });
    }
console.log("productContextdata", productContextData)
    return (
        <ProductsContext.Provider
            value={{
                productContextData,
                updateProductContextProps,
            }}
            displayName="ProductsContext"
        >
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;