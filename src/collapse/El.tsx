import { useState, type JSX } from "react";

import "./Collapse.css"

function Collapse({children, collapsedLabel = "Развернуть", expandedLabel = "Свернуть"}: {children: JSX.Element, collapsedLabel?: string, expandedLabel?: string}): JSX.Element {
    const [show, setShow] = useState(false);
    return (
        <div className="bd-example">
            <p>
                <button
                    className={`btn btn-primary ${show ? "" : "collapsed"}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample"
                    aria-expanded={show}
                    aria-controls="collapseExample"
                    onClick={() => setShow(!show)}
                >
                    {show ? expandedLabel : collapsedLabel}
                </button>
            </p>
            <div className={`collapse ${show ? "show" : ""} ${show ? "collapsing-expand" : "collapsing-collapse"}`} id="collapseExample">
                <div className="card card-body">
                    {children}
                </div>
            </div>
        </div>

    );
}

export default Collapse;
