import { useEffect } from "react"
import {Link} from "react-router-dom"
import "../css/Nav.css"
function Nav()
{
    useEffect(()=>{},[])

    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Movie-App</Link>

            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favs" className="nav-link">Favourite</Link>
            </div>
        </nav>
    )
}
export default Nav