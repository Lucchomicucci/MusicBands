import { Link } from "react-router-dom"
import "./card.css"

export const CardComponent = (props) => {
    return (
        <>
        <Link to={`/band/infoband/${props.el.name}`}>
            <div className="card resultadobusqueda">
                <div className="card-body">
                    <h5 className="card-title">{props.el.name}</h5>
                </div>
            </div>
        </Link>
        </>
    )
}