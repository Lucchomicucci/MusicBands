import { createContext, useEffect, useState } from "react";
import app from "../firebase/client";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(null);
    const [bands, setBands] = useState([])
    const [genreFilter, setGenreFilter] = useState();
    const [bandsToShow, setBandsToShow] = useState(bands);
    const [albums, setAlbums] = useState();

    useEffect(()=>{
        app.auth().onAuthStateChanged(setCurrentUser);
        
        fetch("https://my-json-server.typicode.com/improvein/dev-challenge/bands")
        .then( response => response.json())
        .then( data => setBands(data) )

        fetch("https://my-json-server.typicode.com/improvein/dev-challenge/genre")
        .then(response => response.json())
        .then(data => setGenreFilter(data))

        fetch("https://my-json-server.typicode.com/improvein/dev-challenge/albums")
        .then(response => response.json())
        .then(data => setAlbums(data))
        
    }, [])
    
    return(
        <AuthContext.Provider
        value={{
            currentUser, bands, genreFilter, bandsToShow, setBandsToShow, albums
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}