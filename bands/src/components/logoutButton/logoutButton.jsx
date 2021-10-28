import app from "../../firebase/client"
import { Link } from "react-router-dom"
import './logoutButton.css'

export const LogoutButton= () => {
    return(
        <div className="functionalButtons">
            <Link to="/"><button className="btn btn-secondary funcButt">Home</button></Link>
            <button className="btn btn-danger funcButt" onClick={() => app.auth().signOut()}>Sing out</button>
        </div>
    )
}