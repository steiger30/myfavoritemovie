import "./styles.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "@mui/material/TextField";
import { auth } from "../../auth/firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export default function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div className="login container">
      <div className="navbar container">
        <div>
          <Link className="link" to="/">
            <h1 className="logo">MyFavoriteMovie</h1>
          </Link>
        </div>
      </div>
      <div className="presentation">
        <div className="login-container center ">
          <div className="container-login">
            <div>
              <h1>Entrar</h1>
            </div>
            <div className="container-input">
              <TextField
                label="Email"
                variant="filled"
                onChange={(event) => {
                  setLoginEmail(event.target.value);
                }}
              />
              <TextField
                label="Senha"
                type="password"
                variant="filled"
                onChange={(event) => {
                  setLoginPassword(event.target.value);
                }}
              />
            </div>
            <Button onClick={login} text="Enviar" />
            <div>
              <p>
                Novo por aqui? <Link to="/cadastrar">Assine agora.</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
