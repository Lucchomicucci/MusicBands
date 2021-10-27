import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authcontext";

export const FilterBands = () =>{

    const {bands} = useContext(AuthContext)

    return(
        <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Bands
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            { !!bands ?
                bands.map(el =>{
                    return <Link to={`/band/${el.name}`} className="dropdown-item">{el.name}</Link>
                })
                :
                <li>Cargando</li>
            }

        </div>
    </div>
    )
}