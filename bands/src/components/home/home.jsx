import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/authcontext"
import { Nav } from "../nav/nav"
import { CardComponent } from "../card/card"

export const Home = () =>{
    const {bands} = useContext(AuthContext)
    const [allBands, setAllBands] = useState();
    useEffect(()=>{ 
        setAllBands(bands)
    }, [])

    return(
        <>
        <Nav headerName="Welcome"/>
        {   !!allBands ?
            allBands.map( (el, index) => {
                return <CardComponent el={el} key={index} />
            })
            : <h1>Cargando</h1>
        }
        </>
    )
}