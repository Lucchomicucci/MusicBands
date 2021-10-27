import { useCallback } from "react"
import { withRouter } from "react-router";
import app from "../../firebase/client";

    export const SignUp =({ history })=>{
    const handleSignUp = useCallback(async event =>{
        event.preventDefault();
        const {email, password} = event.target.elements;
        try{
            await app
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error){
            alert(error)
        }
    }, [history]);
    
    return(
        <>
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <label>Email
                    <input type="email" name="email" placeholder="Email" />
                </label>
                <label>Password
                    <input type="password" name="password" placeholder="Password" />
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
        </>
    )
}

export default withRouter(SignUp);