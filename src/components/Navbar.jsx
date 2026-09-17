import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar=()=>{

    return(
        <nav>
            <h1>UTTI RAVITEJA</h1>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>

        </nav>
    )
}

export default Navbar;