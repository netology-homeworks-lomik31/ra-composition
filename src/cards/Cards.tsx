import type { JSX } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from "./Card";

function Cards(): JSX.Element {
    return (
        <>
            <Card btnText="Go somewhere">
                <>
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </>
            </Card>
            <Card imgSrc="https://github.com/netology-code/ra16-homeworks/blob/ra-51/composition/cards/assets/card1.png?raw=true" btnText="Go somewhere">
                <>
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </>
            </Card>
        </>
    )
}

export default Cards;
