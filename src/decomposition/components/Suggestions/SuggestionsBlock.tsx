// Блок предложений, "список" предложений

import Suggestion from "./Suggestion";

function SuggestionsBlock() {
    return (
        <div className="suggestionsBlock">
            <Suggestion title="Погода" titleLink="#">
                // any content
            </Suggestion>
            <Suggestion title="Посещаемое" titleLink="#">
                <span className="suggestionText">
                    <span className="suggestionTextTitle">Недвижимость</span> — о сталинках
                    <span className="suggestionTextTitle">Маркет</span> — люстры и светильники
                    <span className="suggestionTextTitle">Автоюру</span> — привод 4x4 до 500 000
                </span>
            </Suggestion>
            <Suggestion title="Телепрограмма" titleLink="#">
                <span className="suggestionText">
                    <span>
                        02:00 ТНТ.Best
                        <span className="suggestionTextCaption">
                            ТНТ International
                        </span>
                    </span>
                    <span>
                        02:15 Джунглики
                        <span className="suggestionTextCaption">
                            Карусель INT
                        </span>
                    </span>
                    <span>
                        02:25 Наедине со всеми
                        <span className="suggestionTextCaption">
                            Первый
                        </span>
                    </span>
                </span>
            </Suggestion>
            <Suggestion title="Эфир" titleLink="#">
                <img src="#" className="suggestionContentIcon" />
                <span className="suggestionText">
                    <span className="suggestionTextTitle">Управление как искусство</span>
                    <span className="suggestionTextCaption">
                        Успех
                    </span>
                </span>
                <img src="#" className="suggestionContentIcon" />
                <span className="suggestionText">
                    <span className="suggestionTextTitle">Ночь. Мир в это время</span>
                    <span className="suggestionTextCaption">
                        earthTV
                    </span>
                </span>
                <img src="#" className="suggestionContentIcon" />
                <span className="suggestionText">
                    <span className="suggestionTextTitle">Андрей Возн...</span>
                    <span className="suggestionTextCaption">
                        Совершенно секретно
                    </span>
                </span>
            </Suggestion>
        </div>
    )
}

export default SuggestionsBlock;
