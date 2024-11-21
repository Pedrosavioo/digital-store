import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage/Homepage";
import ProductListing from "./pages/ProductListing/ProductListing";
import ProductView from "./pages/ProductView.tsx/ProductView";

function App() {

   return (
      <Router>
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route element={<Homepage />} index />
               <Route element={<ProductListing />}  path="/products" />
               <Route element={<ProductView />}  path="/product" />
            </Route>
         </Routes>
      </Router>
   );
}

export default App;
