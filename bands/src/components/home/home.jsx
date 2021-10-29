import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/authcontext"
import { Nav } from "../nav/nav"
import { CardComponent } from "../card/card"
import './home.css'

export const Home = () => {
    const { bands } = useContext(AuthContext)
    const [allBands, setAllBands] = useState();

    useEffect(() => {
        setAllBands(bands)
    }, [])

    return (
        <>
            <Nav headerName="Welcome" />
            <div className="homeCards">
                {!!allBands ?
                    allBands.map((el, index) => {
                        return <CardComponent el={el} key={index} />
                    })
                    :
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                }
            </div>
        </>
    )
}