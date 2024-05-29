import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Products from "./components/Products.jsx";
import Product from "./components/Product.jsx";
import Contacto from "./components/Contacto.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductProvider>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <App />
            </>
          }
        />
        <Route
          path="/product/"
          element={
            <>
              <Header />
              <Products />

              <Footer />
            </>
          }
        />
        <Route
          path="/product/:idProduct"
          element={
            <>
              <Header />
              <Product />

              <Footer />
            </>
          }
        />
        <Route
          path="/contacto"
          element={
            <>
              <Header />
              <Contacto />

              <Footer />
            </>
          }
        />
      </Routes>
    </ProductProvider>
  </BrowserRouter>
);
