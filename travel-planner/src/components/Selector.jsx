import "../index.css"

function Selector({ 
  options = [
    {value: "", label: ""},
    {value: "Yes", label: "Yes"},
    {value: "No", label: "No"}
  ],
  value,
  onChange,
  className = "yes_no_selector" }) {

  return (
    <div className={`selector_dropdown ${className}`} id="travel_selector_dropdown">
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Selector;