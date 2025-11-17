import "../index.css"

function Bar({barContent}) {

    return (
        <div className="bar">
            {barContent.map((word, i) => (
                <p key={i} className={`bar-item bar-item-${i}`}>
                    {word}
                </p>
            ))}
        </div>
    )
}

export default Bar