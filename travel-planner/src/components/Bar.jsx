import "../index.css"

function Bar({barContent}) {

    return (
        <div id="bar">
            {barContent.map((word, i) => (
                <p key={i} className={`bar-item bar-item-${i}`}>
                    {word}
                </p>
            ))}
        </div>
    )
}

export default Bar