import { useEffect, useState } from "react";
import { fetchProductsArray } from "../services/productService";
import { useNavigate } from "react-router-dom";

function Main() {
  const [topProducts, setTopProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getTopProducts = async () => {
      try {
        const products = await fetchProductsArray();
        const sortedProducts = products.sort((a, b) => b.rating.rate - a.rating.rate);
        setTopProducts(sortedProducts.slice(0, 3));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getTopProducts();
  }, []);

  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">
              Mercado JS{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="currentColor"
                className="animate__animated animate__swing"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
              </svg>
            </h1>
            <p className="lead text-body-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque vel risus magna. Mauris enim magna, ullamcorper eu
              turpis fermentum, varius tincidunt metus.
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div id="ofertas" className="row text-center">
                {topProducts.map((product) => (
                  <div key={product.id} className="col-lg-4 mb-4">
                    <div className="nav-link" onClick={() => navigate(`/product`)}>
                      <div className="card">
                        <div className="imgOverflow">
                          <img
                            src={product.image}
                            className="imgOverflow m-2"
                            alt={product.title}
                          />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">{product.title}</h5>
                          <p className="card-text text-truncate">
                            {product.description}
                          </p>
                          <p className="card-text">Rating: {product.rating.rate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
