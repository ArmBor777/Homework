import { Link } from "react-router-dom"
import classes from "./header.module.scss"

function Header() {

    return (
        <div className={classes.headerCont}>
            <h1>
                GREEN ATOM
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>

            </ul>
        </div>
    )
};


export default Header