import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router"
import { AuthContext } from "../../context/authcontext";
import { CardComponent } from "../card/card";
import { FilterGenre } from "../filter/filter";
import { FilterBands } from "../filterBands/filterBands";
import { LogoutButton } from "../logoutButton/logoutButton";

export const ListBandsByName = () =>{
    const {bands} = useContext(AuthContext)
    const [bandsToShow, setBandsToShow] = useState(bands);
    let {bandName} = useParams();

    useEffect(() =>{
        const filterBands = bands.filter( element => element.name == bandName)
        !bandName 
        ? setBandsToShow(bands)
        : setBandsToShow(filterBands)
    }, [bandName])

    return(
        <>
        <div className="filter">
            <FilterGenre />
            <FilterBands />
        </div>
        {   !!bands ?
            bandsToShow.map( (el, index) => {
                return <CardComponent el={el} key={index} />
            })
            : <h1>Cargando</h1>
        }
        <LogoutButton />
        </>
    )
}