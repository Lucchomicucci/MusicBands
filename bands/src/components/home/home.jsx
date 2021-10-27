import { FilterGenre } from "../filter/filter";
import { FilterBands } from "../filterBands/filterBands";
import { LogoutButton } from "../logoutButton/logoutButton";
import './home.css'

export const Home = () => {
    return (
        <>
            <h1>Welcome</h1>
            <div className="filter">
                <FilterGenre />
                <FilterBands />
            </div>
                <LogoutButton />
        </>
    )
}