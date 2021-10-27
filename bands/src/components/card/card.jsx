import { Link } from "react-router-dom"
import "./card.css"

export const CardComponent = (props) => {
    return (
        <>
        <Link to={`/band/infoband/${props.el.name}`}>
            <div class="card resultadobusqueda">
                <div class="card-body">
                    <h5 class="card-title">{props.el.name}</h5>
                </div>
            </div>
        </Link>
        </>
    )
}