import { FilterGenre } from "../filter/filter";
import { FilterBands } from "../filterBands/filterBands";
import { LogoutButton } from "../logoutButton/logoutButton";

export const Home = () => {
    return (
        <>
            <h1>Welcome</h1>
            <div>
                <input placeholder="Search" aria-label="Search" />
                <button>Search</button>
            </div>
            <FilterGenre />
            <FilterBands />
            <LogoutButton />
        </>
    )
}