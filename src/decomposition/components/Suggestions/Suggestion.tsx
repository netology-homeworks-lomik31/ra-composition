// Элемент блока предложений (погода, посещаемое и т.д.)

function Suggestion( { children, title, titleLink } : { children: React.ReactNode, title: string, titleLink?: string }) {
    return (
        <div className="suggestion">
            <h3 className="suggestion-title">
                {titleLink ? <a href={titleLink}>{title}</a> : title}
            </h3>
            <div className="suggestion-content">
                {children}
            </div>
        </div>
    );

}

export default Suggestion;
