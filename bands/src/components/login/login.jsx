import { useCallback, useContext } from "react"
import { Redirect } from "react-router";
import { AuthContext } from "../../context/authcontext";
import app from "../../firebase/client";

export const Login = ({ history }) =>{
    const handleLogin = useCallback(
        async event =>{
            event.preventDefault();
            const {email, password } = event.target.elements;
            try{
                await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            }catch(error){
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if(currentUser){
        return <Redirect to="/" />
    }

    return(
        <div>
            <h1>Log in</h1>
            <form onSubmit={handleLogin}>
                <label>Email
                    <input type="email" name="email" placeholder="Email" />
                </label>
                <label>Password
                    <input type="password" name="password" placeholder="Password" />
                </label>
                <button type="submit">Log in</button>
            </form>
        </div>
        
    )
}