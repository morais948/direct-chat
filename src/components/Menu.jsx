import { Link } from "react-router-dom";

export default function Menu(){
    return (
        <ul>
            <li>
                <Link to="/">Login</Link>
            </li>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/teste-estado">About</Link>
            </li>
        </ul>
    )
}