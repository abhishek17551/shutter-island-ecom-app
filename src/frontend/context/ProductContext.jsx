import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext()

export const ProductProvider = ({children}) => {
    const [products,setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch('/api/products/');
            const data = await response.json();
            setProducts(data.products)
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchProducts();
      }, []);

    const productContextValue = {products}
    return (
        <ProductContext.Provider value={productContextValue}>
            {children}
        </ProductContext.Provider>
    )

}