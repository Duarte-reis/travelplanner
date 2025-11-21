import "../../index.css";
import TextBox from "../TextBox";

function PaxTiers({ index = 0, numOfPaxData, setNumOfPaxData }) {

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
    updated[index] = {...updated[index], [tierKey]: {
        ...updated[index][tierKey],
        [field]: value,
      },
    };
    setNumOfPaxData(updated);
  };

  return (
    <div id="pax_tier">

      <div className="tier-row">
        <TextBox
          value={data.paxTier1.numOfPax}
          onChange={(value) => updateValue("paxTier1", "numOfPax", value)}
        />
        <p>+</p>
        <TextBox
          value={data.paxTier1.free}
          onChange={(value) => updateValue("paxTier1", "free", value)}
        />
      </div>

      <div className="tier-row">
        <TextBox
          value={data.paxTier2.numOfPax}
          onChange={(value) => updateValue("paxTier2", "numOfPax", value)}
        />
        <p>+</p>
        <TextBox
          value={data.paxTier2.free}
          onChange={(value) => updateValue("paxTier2", "free", value)}
        />
      </div>

      <div className="tier-row">
        <TextBox
          value={data.paxTier3.numOfPax}
          onChange={(value) => updateValue("paxTier3", "numOfPax", value)}
        />
        <p>+</p>
        <TextBox
          value={data.paxTier3.free}
          onChange={(value) => updateValue("paxTier3", "free", value)}
        />
      </div>

      <div className="tier-row">
        <TextBox
          value={data.paxTier4.numOfPax}
          onChange={(value) => updateValue("paxTier4", "numOfPax", value)}
        />
        <p>+</p>
        <TextBox
          value={data.paxTier4.free}
          onChange={(value) => updateValue("paxTier4", "free", value)}
        />
      </div>

      <div className="tier-row">
        <TextBox
          value={data.paxTier5.numOfPax}
          onChange={(value) => updateValue("paxTier5", "numOfPax", value)}
        />
        <p>+</p>
        <TextBox
          value={data.paxTier5.free}
          onChange={(value) => updateValue("paxTier5", "free", value)}
        />
      </div>

      <div className="tier-row">
        <TextBox
          value={data.paxTier6.numOfPax}
          onChange={(value) => updateValue("paxTier6", "numOfPax", value)}
        />
        <p>+</p>
        <TextBox
          value={data.paxTier6.free}
          onChange={(value) => updateValue("paxTier6", "free", value)}
        />
      </div>

      <div className="tier-row">
        <TextBox
          value={data.paxTier7.numOfPax}
          onChange={(value) => updateValue("paxTier7", "numOfPax", value)}
        />
        <p>+</p>
        <TextBox
          value={data.paxTier7.free}
          onChange={(value) => updateValue("paxTier7", "free", value)}
        />
      </div>
    </div>
  );
}

export default PaxTiers;