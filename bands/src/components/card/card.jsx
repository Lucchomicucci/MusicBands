import { Link } from "react-router-dom"

export const CardComponent = (props) => {
    return (
        <>
        <Link to={`/band/infoband/${props.el.name}`}>
            <div class="card resultadobusqueda">
                <div class="card-body">
                    <h5 class="card-title">{props.el.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{props.el.year}</h6>
                </div>
            </div>
        </Link>
        </>
    )
}