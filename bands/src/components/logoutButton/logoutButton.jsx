import app from "../../firebase/client"

export const LogoutButton= () => {
    return(
        <button onClick={() => app.auth().signOut()}>Sing out</button>
    )
}