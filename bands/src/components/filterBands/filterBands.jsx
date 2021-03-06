import { useContext } from "react"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authcontext";
import '../nav/nav.css'

export const FilterBands = () => {

    const { bands } = useContext(AuthContext)

    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Bands
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {!!bands ?
                    bands.map((el, index) => {
                        return <Link to={`/band/${el.name}`} className="dropdown-item" key={index}>{el.name}</Link>
                    })
                    :
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                }

            </div>
        </div>
    )
}