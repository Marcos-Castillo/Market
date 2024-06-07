import { createContext, useState, useEffect } from 'react';
import { fetchProducts } from '../services/productService';

export const ProductContext = createContext();

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
