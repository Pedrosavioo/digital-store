import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage/Homepage";
import ProductListing from "./pages/ProductListing/ProductListing";

function App() {
   return (
      <Router>
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route element={<Homepage />} index />
               <Route element={<ProductListing />}  path="/produtos" />
            </Route>
         </Routes>
      </Router>
   );
}

export default App;
