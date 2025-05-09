import type { JSX } from "react"

function Card({children, btnText, imgSrc = ""}: {children: JSX.Element, btnText: string, imgSrc?: string}

): JSX.Element {
    return (
        <div className="card" style={{ width: '18rem' }}>
            {imgSrc ? <img src={imgSrc} className="card-img-top" alt="..." /> : null}
            <div className="card-body">
                {children}
                <a href="#" className="btn btn-primary">{btnText}</a>
            </div>
        </div>
    )
}

export default Card;
