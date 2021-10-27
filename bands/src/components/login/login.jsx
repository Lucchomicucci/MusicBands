import { useCallback, useContext } from "react"
import { Redirect } from "react-router";
import { AuthContext } from "../../context/authcontext";
import { Link } from "react-router-dom";
import app from "../../firebase/client";
import './login.css'

export const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />
    }

    return (
        <>
            <div className="container card text-center">
                <form className="formLog" onSubmit={handleLogin}>
                    <h1>Log in</h1>
                    <label>Email:
                        <input type="email" name="email"/>
                    </label>
                    <label>Password:
                        <input type="password" name="password" />
                    </label>
                    <div className="divButtons">
                    <button type="submit" className="btn btn-secondary btn-log">Log in</button>
                    <Link className="btn btn-secondary btn-log" to="/signup">Register</Link> 
                    </div>
                </form>
            </div>
        </>
    )
}