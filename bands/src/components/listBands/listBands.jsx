import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router"
import { AuthContext } from "../../context/authcontext";
import { CardComponent } from "../card/card";
import { Nav } from '../nav/nav'

export const ListBands = () => {
    const { bands } = useContext(AuthContext)
    const [bandsToShow, setBandsToShow] = useState(bands);
    let { genre } = useParams();

    useEffect(() => {
        const filterBands = bands.filter(element => element.genreCode == genre)
        !genre
            ? setBandsToShow(bands)
            : setBandsToShow(filterBands)
    }, [genre])

    return (
        <>
            <div className="filter">
                <Nav headerName="Results" />
            </div>
            {!!bands ?
                bandsToShow.map((el, index) => {
                    return <CardComponent el={el} key={index} />
                })
                :
                <div className="spinner-border" role="status">
                    <span className="visually-hidden"></span>
                </div>
            }
        </>
    )
}