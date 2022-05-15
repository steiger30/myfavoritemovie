import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import Cadastrar from "../Cadastrar";

import Movies from "../Movies";
import MovieDetails from "../MovieDetails";

function rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/movies" exact element={<Movies />} />
                <Route path="/movie-details/:id" element={<MovieDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastrar" element={<Cadastrar />} />
            </Routes>
        </BrowserRouter>
    );
}

export default rotas;
