import { Link } from "react-router-dom";

import "./Navigator.css";

function Navigator() {
    return (
        <div className="navigator">
            <Link to="/cards">cards</Link>
            <Link to="/steps">steps</Link>
        </div>
    );
}

export default Navigator;