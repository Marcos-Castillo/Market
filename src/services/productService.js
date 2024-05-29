
export const fetchProducts = async () => {
    
    const response = await fetch('https://dummyjson.com/products?limit=12'); 
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