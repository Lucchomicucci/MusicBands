import { useContext } from "react";
import { AuthContext } from "../../context/authcontext";
import app from "../../firebase/client"
import { FilterGenre } from "../filter/filter";
import { FilterBands } from "../filterBands/filterBands";

export const Home = () => {
    return (
        <>
            <h1>Welcome</h1>
            <div>
                <input placeholder="Search" aria-label="Search" />
                <button>Search</button>
            </div>
            <FilterGenre />
            <FilterBands />
            <button onClick={() => app.auth().signOut()}>Sing out</button>
        </>
    )
}