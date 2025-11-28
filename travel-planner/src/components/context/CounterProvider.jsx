import { useLocalStorage } from "../../hooks/useLocalStorage";
import { CounterContext } from "./CounterContext";

function CounterProvider({ children }) {
    const [numOfPaxData, setNumOfPaxData] = useLocalStorage("numofpaxdata", [
        {
            paxTier1: { numOfPax: "15", free: "1" },
            paxTier2: { numOfPax: "20", free: "1" },
            paxTier3: { numOfPax: "25", free: "1" },
            paxTier4: { numOfPax: "30", free: "2" },
            paxTier5: { numOfPax: "35", free: "2" },
            paxTier6: { numOfPax: "40", free: "2" },
            paxTier7: { numOfPax: "45", free: "3" }, 
        }
    ]);

    return (
        <CounterContext.Provider value={{
            numOfPaxData, setNumOfPaxData
        }}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider