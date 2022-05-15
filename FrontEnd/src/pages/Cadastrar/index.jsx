import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../auth/firebase";
import Button from "../../components/Button";
import TextField from "@mui/material/TextField";

export default function Cadastrar() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/movie");
  }, [user, loading]);

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
                  label="Nome"
                  variant="filled"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <TextField
                  label="Email"
                  variant="filled"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  label="Senha"
                  type="password"
                  variant="filled"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button onClick={register} text="Cadastrar" />
              <Button onClick={signInWithGoogle} text="Cadastrar com Googler" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
