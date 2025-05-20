import NewsBlock from "./components/News/NewsBlock";
import Search from "./components/Search/Search";
import SuggestionBlock from "./components/Suggestions/SuggestionsBlock";

function Decomposition() {
    return (
        <div className="decomposition">
            <Search />
            <SuggestionBlock />
            <NewsBlock />
        </div>
    )
}

export default Decomposition;
