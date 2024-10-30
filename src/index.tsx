import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { SelectedProvider } from "./context/SelectedContext";

const root = ReactDOM.createRoot(
   document.getElementById("root") as HTMLElement
);
root.render(
   <React.StrictMode>
      <SelectedProvider>
         <App />
      </SelectedProvider>
   </React.StrictMode>
);
