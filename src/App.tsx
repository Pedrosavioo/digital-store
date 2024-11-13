import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage/Homepage";

function App() {
   return (
      <Router>
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route element={<Homepage />} index />
            </Route>
         </Routes>
      </Router>
   );
}

export default App;
