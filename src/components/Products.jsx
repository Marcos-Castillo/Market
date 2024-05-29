import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";


const Products = () => {
  const data = useContext(ProductContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data && data.products && Array.isArray(data.products.products)) {
      setProducts(data.products.products);
    } else {
      console.log('Products is not an array:', data);
    }
  }, [data]);


  return (
    <div id="productos" className="text-center row container mx-auto">
      {
        products.length === 0 ? (
          <div className="loader mx-auto mt-5">Loading...</div>
        ) : (
          products.map((product) => (
              <div key={product.id} className="col-lg-4 col-md-6 mb-4">
                    <Link  to={`/product/${product.id}` } className="nav-link"> 
                <div className="card">
                    <div className="imgOverflow">
                    <img src={product.images ? product.images[0] : ""}  className="imgOverflow m-2" alt={product.title} />
                    </div>
                    <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-title fs-3">{product.price}</p>
                    </div>
                </div>
            </Link>
                </div>
          ))
        )
      }
    </div>
  );
}

export default Products;
