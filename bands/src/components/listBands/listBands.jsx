import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router"
import { AuthContext } from "../../context/authcontext";
import { CardComponent } from "../card/card";
import { FilterGenre } from "../filter/filter";
import { FilterBands } from "../filterBands/filterBands";
import { Home } from "../home/home";
import { LogoutButton } from "../logoutButton/logoutButton";

export const ListBands = () =>{
    const {bands} = useContext(AuthContext)
    const [bandsToShow, setBandsToShow] = useState(bands);
    let {genre} = useParams();

    useEffect(() =>{
        const filterBands = bands.filter( element => element.genreCode == genre)
        !genre 
        ? setBandsToShow(bands)
        : setBandsToShow(filterBands)
    }, [genre])

    return(
        <>
        <div className="filter">
        <Home headerName="Results" />
        </div>
        {   !!bands ?
            bandsToShow.map( (el, index) => {
                return <CardComponent el={el} key={index} />
            })
            : <h1>Cargando</h1>
        }
        </>
    )
}