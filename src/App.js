import "./App.css";

import { LandingPage } from "./frontend/components/Pages/landing-page/LandingPage";
import Mockman from 'mockman-js'

import logo from "./logo.png";
import { Route,Routes } from "react-router-dom";
import { ProductListing } from "./frontend/components/Pages/product-listing/ProductListing";
import { Cart } from "./frontend/components/Pages/cart-page/Cart";
import { Wishlist } from "./frontend/components/Pages/wishlist-page/Wishlist";
import { Checkout } from "./frontend/components/Pages/checkout-page/Checkout";
import { ProductDetail } from "./frontend/components/Pages/product-details/ProductDetail";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path="/products/:productId" element={<ProductDetail/>}/>
        <Route path='/products' element={<ProductListing/>} />
        <Route path='/mockman' element={<Mockman />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </div>
  );
}

export default App;
