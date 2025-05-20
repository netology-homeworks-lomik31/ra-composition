import { Link } from "react-router-dom";

import "./Navigator.css";

function Navigator() {
    return (
        <div className="navigator">
            <Link to="/cards">cards</Link>
            <Link to="/collapse">collapse</Link>
            <Link to="/decomposition">decomposition</Link>
        </div>
    );
}

export default Navigator;