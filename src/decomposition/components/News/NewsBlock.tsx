// Блок новостей. Селектор-бар, новости и курсы валют

import News from "./News";

function NewsBlock() {
    return (
        <div className="newsBlock">
            <div className="newsBar">
                <div className="newsBarItem">
                    Сейчас в СМИ
                </div>
                <div className="newsBarItem">
                    В Германии
                </div>
                <div className="newsBarItem">
                    Рекомендуем
                </div>
                <div className="newsBarDate">
                    31 июля, среда 03:32
                </div>
            </div>
            <div className="news">
                <News newsItem={{ img: "#", title: "Заголовок новости", link: "#" }} />
                <News newsItem={{ img: "#", title: "Заголовок новости", link: "#" }} />
                <News newsItem={{ img: "#", title: "Заголовок новости", link: "#" }} />
                <News newsItem={{ img: "#", title: "Заголовок новости", link: "#" }} />
                <News newsItem={{ img: "#", title: "Заголовок новости", link: "#" }} />
            </div>
            <div className="exchangeRates">
                <div className="exchangeRatesItem">
                    <span className="exchangeRatesContent">USD MOEX 63,52</span>
                    <span className="exchangeRatesCaption">+0,09</span>
                </div>
                <div className="exchangeRatesItem">
                    <span className="exchangeRatesContent">EUR MOEX 70,86</span>
                    <span className="exchangeRatesCaption">+0,14</span>
                </div>
                <div className="exchangeRatesItem">
                    <span className="exchangeRatesContent">НЕФТЬ 64,90</span>
                    <span className="exchangeRatesCaption">+1,63</span>
                </div>
            </div>
        </div>
    )
}

export default NewsBlock;
