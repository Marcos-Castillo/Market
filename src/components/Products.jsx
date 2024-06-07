import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

  const Products = () => {
    const data = useContext(ProductContext);
    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);

  
    useEffect(() => {
      if (data && data.products && Array.isArray(data.products.products)) {
        const productsList = data.products.products;
        setProducts(productsList);
        const maxProductPrice = Math.max(...productsList.map(p => p.price));
        setMaxPrice(maxProductPrice);
        } else {
        console.log("Products is not array:", data);
      }
    }, [data]);
    
    const handleResetFilters = () => {
      setKeyword("");
      setCategory("");
      setPrice(0); 
    };
  const filteredProducts = products.filter((product) => {
    return (
      (keyword === "" || product.title.toLowerCase().includes(keyword.toLowerCase())) &&
      (category === "" || product.category.toLowerCase() === category.toLowerCase()) &&
      (price === 1000 || product.price >= price)
    );
  });

  return (
    <>
      <div className="col-2 text-center d-none d-md-block">
      <ul className="list-group sticky-top">
          <li className="list-group-item ">
            <label>Buscar</label>
            <input className="input-group form-control"
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </li>
          <li className="list-group-item ">
            <label>Categoria</label>
            <select className="input-group form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              {
              Array.from(new Set(products.map(p => p.category))).map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </li>

          <li className="list-group-item ">
            <label>Precio Minimo</label>
            <input className="input-group "
              type="range"
              value={price}
              step="10"
              min="0"
              max={maxPrice}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
            <p>{price}</p>
          </li>
          <li className="list-group-item " onClick={handleResetFilters} >
              Reset Filters
          </li>
        </ul>
      </div>
      {filteredProducts.length === 0 ? (
        <div className="col my-5">
          <div className="loader mx-auto my-5"></div>
        </div>
      ) : (
        <div id="productos" className="text-center row container mx-auto">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6 mb-4">
              <Link to={`/product/${product.id}`} className="nav-link">
                <div className="card">
                  <div className="imgOverflow">
                    <img
                      src={product.images ? product.images[0] : ""}
                      className="imgOverflow m-2"
                      alt={product.title}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-title fs-3">{product.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
