import "../../index.css";
import TextBox from "../TextBox";

function PaxTiers({ 
  index, 
  numOfPaxData, 
  setNumOfPaxData 
}) {

  const defaultData = {
    paxTier1: { numOfPax: "15", free: "1" },
    paxTier2: { numOfPax: "20", free: "1" },
    paxTier3: { numOfPax: "25", free: "1" },
    paxTier4: { numOfPax: "30", free: "2" },
    paxTier5: { numOfPax: "35", free: "2" },
    paxTier6: { numOfPax: "40", free: "2" },
    paxTier7: { numOfPax: "45", free: "3" },
  };

  const data = numOfPaxData[index] || defaultData;

  const updateValue = (tierKey, field, value) => {
    const updated = [...numOfPaxData];
    updated[index] = {
      ...updated[index],
      [tierKey]: { 
        ...updated[index][tierKey], 
        [field]: value 
      },
    };
    setNumOfPaxData(updated);
  };

  return (
    <div id="pax_tier">
      {Object.entries(data).map(([tierName, values]) => (
        <div className="tier-row" key={tierName}>
          <TextBox
            value={values.numOfPax}
            onChange={(value) => 
              updateValue(
                tierName, 
                "numOfPax", 
                value
              )}
          />
          <p>+</p>
          <TextBox
            value={values.free}
            onChange={(value) => 
              updateValue(
                tierName, 
                "free", 
                value
              )}
          />
        </div>
      ))}
    </div>
  );
}

export default PaxTiers;