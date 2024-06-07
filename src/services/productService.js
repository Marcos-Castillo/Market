
export const fetchProducts = async () => {
    
    const response = await fetch('https://dummyjson.com/products?limit=60'); 
    if (!response.ok) {
        return null;
    }
    const data = await response.json();
    console.log('service all', data);
    return data;
  };

  export const fetchProduct = async (id) => {
    
    const response = await fetch('https://dummyjson.com/products/'+id); 
    if (!response.ok) {
        return null;
    }
    const data = await response.json();
    console.log('service one', data);
    return data;
  };
  
export const fetchProductsArray = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  if (Array.isArray(data)) {
    return data;
  } else if (data.products && Array.isArray(data.products)) {
    return data.products;
  } else {
    throw new Error('Unexpected API response');
  }
};