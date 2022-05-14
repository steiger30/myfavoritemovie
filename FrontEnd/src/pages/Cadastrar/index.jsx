import "./styles.scss";
import { useState } from "react";
import { auth } from "../../auth/firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

import TextField from "@mui/material/TextField";
export default function Cadastrar() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <div>
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
                <h1>Cadastrar</h1>
              </div>
              <div className="container-input">
                <TextField
                  label="Email"
                  variant="filled"
                  onChange={(event) => {
                    setRegisterEmail(event.target.value);
                  }}
                />
                <TextField
                  label="Senha"
                  type="password"
                  variant="filled"
                  onChange={(event) => {
                    setRegisterPassword(event.target.value);
                  }}
                />
              </div>
              <Button onClick={register} text="Cadastrar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
