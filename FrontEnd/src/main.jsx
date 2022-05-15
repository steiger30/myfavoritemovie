import React from "react";
import ReactDOM from "react-dom";
import Rotas from "./pages/Routes";
import CssBaseline from "@mui/material/CssBaseline";
import './styles.scss';

ReactDOM.render(
    <React.StrictMode>
        <CssBaseline />
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
