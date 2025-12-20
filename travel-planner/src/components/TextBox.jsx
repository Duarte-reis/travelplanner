import "../index.css"

function TextBox({
    value, 
    placeholder, 
    onChange
}) {

    return (
        <input 
            type="text" 
            className="text_box"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default TextBox