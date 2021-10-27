import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export const FilterGenre = () =>{

    const [genre, setGenre] = useState();

    useEffect(()=>{
        fetch("https://my-json-server.typicode.com/improvein/dev-challenge/genre")
        .then(response => response.json())
        .then(data => setGenre(data))
    }, [])

    return(
        <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Genre
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            { !!genre ?
                genre.map(el =>{
                    return <Link to={`/genre/${el.code}`} className="dropdown-item">{el.name}</Link>
                })
                :
                <li>Cargando</li>
            }

        </div>
    </div>
    )
}