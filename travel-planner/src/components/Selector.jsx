import "../index.css"

function Selector({ 
  options = [
    {value: "", label: ""},
    {value: "Yes", label: "Yes"},
    {value: "", label: "No"}
  ],
  defaultValue, 
  className = "yes_no_selector" }) {

  return (
    <div className={`selector_dropdown ${className}`} id="travel_selector_dropdown">
      <form action="" method="post">
        <label htmlFor="selector" className="sr-only">Trip Type:</label>
        <select name="selector" id="selector" defaultValue={defaultValue}>
          {options.map((option, i) => (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </form>
    </div>
  )
}

export default Selector;