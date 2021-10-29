import { Link } from "react-router-dom"

export const CleanFilter = () => {

    return (
        <>
            <Link to="/">
                <button className="btn btn-secondary">Clean Filters</button>
            </Link>
        </>
    )
}