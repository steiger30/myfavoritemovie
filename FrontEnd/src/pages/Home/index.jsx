import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import "./styles.scss";

export default function Home() {
  return (
    <div className="Home">
      <div className="navbar container">
        <div>
          <h1 className="logo">MyFavoriteMovie</h1>
        </div>
        <div>
          <Link to="login">
          <Button variant="contained">Contained</Button>
          </Link>
        </div>
      </div>
      <div className="presentation">
        <h1>Lorem ipsum </h1>
        <p>Lorem ipsum Lorem ipsum</p>
      </div>
    </div>
  
  );
}
