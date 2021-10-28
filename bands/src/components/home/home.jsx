import { FilterGenre } from "../filter/filter";
import { FilterBands } from "../filterBands/filterBands";
import { LogoutButton } from "../logoutButton/logoutButton";
import './home.css'

export const Home = (props) => {

    return (
        <>  
            <nav>
            <h1>{props.headerName}</h1>
            <LogoutButton />
            </nav>
            <div className="filter">
                <FilterGenre />
                <FilterBands />
            </div>
            
        </>
    )
}