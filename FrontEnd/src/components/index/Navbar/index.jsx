import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import "./style.scss";
export default function Navbar() {
  return (
    <div class="navbar container">
      <div>
        <h1 className="logo">MyFavoriteMovie</h1>
      </div>
      <div>
        <Link to="login">
          <Button variant="contained">Contained</Button>
        </Link>
      </div>
    </div>
  );
}
