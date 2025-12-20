import "../index.css"

function TextArea({
    value, 
    placeholder, 
    onChange
}) {

    return (
        <textarea
            type="text" 
            className="text_area"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default TextArea