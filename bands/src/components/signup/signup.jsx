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
        <div className="container card text-center">
                <form className="formLog" onSubmit={handleSignUp}>
                    <h1>Sign Up</h1>
                    <label>Email:
                        <input type="email" name="email" />
                    </label>
                    <label>Password:
                        <input type="password" name="password" />
                    </label>
                    <button type="submit" className="btn btn-secondary btn-log">Sign Up</button>
                </form>
            </div>
        </>
    )
}

export default withRouter(SignUp);