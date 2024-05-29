import { createContext, useState, useEffect } from 'react';
import { fetchProducts } from '../services/productService';

export const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
      console.log('contexto', data);
    });
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
