import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

function rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={ <Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default rotas;
