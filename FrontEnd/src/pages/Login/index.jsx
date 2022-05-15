import "./styles.scss";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "@mui/material/TextField";
import {
    auth,
    logInWithEmailAndPassword,
    signInWithGoogle,
} from "../../auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) navigate("/movies");
    }, [user, loading]);

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
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                label="Senha"
                                type="password"
                                variant="filled"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <Button
                            onClick={() => logInWithEmailAndPassword(email, password)}
                            text="Enviar"
                        />
                        <Button onClick={signInWithGoogle} text="Logar com Google" />
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
