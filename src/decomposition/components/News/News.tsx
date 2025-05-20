// Новостная строка (сама новость)

import type NewsType from "../../types/News";

function News({ newsItem }: { newsItem: NewsType }) {
    return (
        <div className="newsItem">
            <img src={newsItem.img} alt="" className="pageIcon" />
            <a href={newsItem.link}>
                <span className="newsTitle">
                    {newsItem.title}
                </span>
            </a>
        </div>
    )
}

export default News;
