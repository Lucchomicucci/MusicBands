import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router"
import { AuthContext } from "../../context/authcontext";
import { CardComponent } from "../card/card";
import { FilterGenre } from "../filter/filter";
import { FilterBands } from "../filterBands/filterBands";

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
        <FilterGenre />
        <FilterBands />
        {   !!bands ?
            bandsToShow.map( (el, index) => {
                return <CardComponent el={el} key={index} />
            })
            : <h1>Cargando</h1>
        }
        </>
    )
}