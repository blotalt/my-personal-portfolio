import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Security from "./pages/Security";
import CCNA from "./pages/CCNA";
import WebDev from "./pages/WebDev";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<App />} />

      <Route path="/security" element={<Security />} />

      <Route path="/ccna" element={<CCNA />} />

      <Route path="/webdev" element={<WebDev />} />

    </Routes>
  </BrowserRouter>
);