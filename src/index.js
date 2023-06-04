import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./frontend/context/ProductContext";
import { WishlistProvider } from "./frontend/context/WishlistContext";
import { CartProvider } from "./frontend/context/CartContext";
import { CheckoutProvider } from "./frontend/context/CheckoutContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <WishlistProvider>
          <CartProvider>
            <CheckoutProvider>
                <App/>
            </CheckoutProvider>
          </CartProvider>
        </WishlistProvider>
      </ProductProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
