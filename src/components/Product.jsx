import { Link, useParams } from "react-router-dom";
import { fetchProduct } from "../services/productService";
import { useState, useEffect } from "react";

const Product = () => {
  const { idProduct } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct(idProduct).then((data) => {
      setProduct(data);
    });
  }, [idProduct]);

  if (!product) {
    return <div className="loader mx-auto mt-5">Loading...</div>
  }

  return (
    <div className="container my-4">
      <div id="carouselExample" className="carousel slide ">
        <div className="carousel-inner">
          {product.images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="d-flex w-100 ">
                <img src={image} className="d-block m-auto" alt={`Product ${index}`} />
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev bg-secondary" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next bg-secondary" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container my-4">
        <div className="d-flex flex-row-reverse">
          <div className="badge text-bg-warning mx-1">Rate: {product.rating}</div>
          <span className="badge text-bg-secondary mx-1">{product.category}</span>
        </div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className="d-flex flex-row-reverse fs-5">
        <Link to='/product' className="nav-link">  <button className="btn btn-secondary">Volver</button></Link>
        </div>
        <p className="card-text fs-6 text-body-secondary">
          Stock: {product.stock} <span className="d-flex flex-row-reverse fs-5">${product.price}</span>
        </p>
      </div>
    </div>
  );
};

export default Product;
