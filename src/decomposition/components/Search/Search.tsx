// Весь блок поиска

function Search() {
    return (
        <div className="search">
            <ul className="searchCategorySelector">
                <li className="searchCategorySelectorItem">
                    <a href="#" className="searchCategorySelectorLink">Видео</a>
                </li>
                <li className="searchCategorySelectorItem">
                    <a href="#" className="searchCategorySelectorLink">Картинки</a>
                </li>
                <li className="searchCategorySelectorItem">
                    <a href="#" className="searchCategorySelectorLink">Новости</a>
                </li>
                <li className="searchCategorySelectorItem">
                    <a href="#" className="searchCategorySelectorLink">Карты</a>
                </li>
            </ul>
            <img src="#" alt="" className="searchLogo" />
            <div className="searchForm">
                <form className="searchFormInput">
                    <input type="text" className="searchFormInputField" placeholder="Поиск" />
                    <button type="submit" className="searchFormInputButton" />
                </form>
            </div>
            <div className="searchSuggestion">
                <span className="searchSuggestionText">Найдется всё. Например, фаза луны сегодня</span>
            </div>
        </div>
    )
}

export default Search;
