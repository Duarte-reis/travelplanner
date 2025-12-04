import { useLocalStorage } from "../../hooks/useLocalStorage";
import { CounterContext } from "./CounterContext";
import { useEffect } from "react";

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

    const [hotelFormData, setHotelFormData] = useLocalStorage("hotelformdata", [
        {   
            dateContainer: [{day:"", date:""}],
            cityContainer: [{city: ""}], 
            hotelContainer: [{hotel: ""}], 
            hotelPriceContainer: [{hotelPrice: ""}], //price per person
            singleSupplementContainer: [{singleSupplement: ""}], //price per person
            mealPlanContainer: [{mealPlan: ""}], 
            dinnerContainer: [{dinner: ""}], 
            dinnerPriceContainer: [{dinnerPrice: ""}], //price per person
            lunchContainer: [{lunch: ""}], 
            lunchPriceContainer: [{lunchPrice: ""}], //price per person
            guideSelectorContainer: [{guideSelector: ""}], 
            driverSelectorContainer: [{driverSelector: ""}],
        }    
    ])

    const [localGuidesFormData, setLocalGuidesFormData] = useLocalStorage("localguidesformdata", [
        {
            countryInitialsContainer: [{countryInitials:""}],
            serviceNameContainer: [{serviceName: ""}],
            price1Container: [{price1: ""}], // price per pax tier
            price2Container: [{price2: ""}], // price per pax tier
            price3Container: [{price3: ""}], // price per pax tier
            price4Container: [{price4: ""}], // price per pax tier
            price5Container: [{price5: ""}], // price per pax tier
            price6Container: [{price6: ""}], // price per pax tier
            price7Container: [{price7: ""}], // price per pax tier
        } 
    ])

    const [activitiesFormData, setActivitiesFormData] = useLocalStorage("activitiesformdata", [
        {
            countryContainer: [{ country: "" }],
            nameOfActivityContainer: [{ nameOfActivity: "" }],
            pricePerPersonContainer: [{ pricePerPerson: "" }]
        }
    ])

    const [formHeaderValues, setFormHeaderValues] = useLocalStorage("formheadervalues", {
        topSection: { year: "", startDate: "", endDate: "" },
        middleSection: { destination: "", groupName: "", clientName: "", language: "", currency: "" },
        bottomSection: { tripTitle: "" },
        notesSection: { notes: "" },
    });

    const [finalRrpPerTier, setFinalRrpPerTier] = useLocalStorage("finalRrpPerTier", []);

    const [hotelInclusions, setHotelInclusions] = useLocalStorage("hotelinclusions", {
        cityInclusionsContainer: hotelFormData.map(form => form.cityContainer.map((cityObj, idx) => ({
                city: cityObj.city || "",
                hotel: form.hotelContainer[idx]?.hotel || ""
            })))
            .flat() // CityContainer and hotelContainer are, originally, 2 different arrays in hotelFormData. Flat() combines 2 arrays in one.
    });

    // Synchronize hotelInclusions whenever hotelFormData changes. This allows us to display city,hotel and stars in the "The price includes", in the FinalOffer.
    useEffect(() => {
        setHotelInclusions(prev => ({
            cityInclusionsContainer: hotelFormData
                .map((form, formIndex) =>
                    form.cityContainer.map((cityObj, idx) => {
                        const index = formIndex * form.cityContainer.length + idx;
                        const prevLine = prev.cityInclusionsContainer?.[index];
                        
                        return {
                            city: cityObj.city || "",
                            hotel: form.hotelContainer[idx]?.hotel || "",
                            hotelRateStars: prevLine?.hotelRateStars || ""
                        };
                    })
                )
                .flat()
        }));
    }, [hotelFormData]);

    const [hotelInclusionsExtras, setHotelInclusionsExtras] = useLocalStorage("hotelinclusionsextras", {
        cityTax: "",
        mealPlan: {mealPlanSelector: "", mealPlanText: ""},
        beverages: {beveragesSelector: "", beveragesText: ""},
        bellman: {bellmanSelector: "", bellmanText: ""},
        supplement: {supplementSelector: "", multiplication:"", supplementText: ""}
    })

    const [servicesInclusions, setServicesInclusions] = useLocalStorage("servicenclusions", {
        transportationInclusionsContainer: {transportationSelector: "", transportationText: ""},
        guideInclusionsContainer: {guideSelector: "", guideText: ""},
        flightInclusionsContainer: {flightSelector: "", flightText: ""},
        trainInclusionsContainer: {trainSelector: "", trainText: ""},
        localGuidesInclusionsContainer: {localGuidesSelector: "", guidesText: ""},
        activitiesInclusionsContainer: {activitiesSelector: "", activitiesText: ""},
        headsetsInclusionsContainer: {headsetsSelector: "", headsetsText: ""},
        gratuitiesInclusionsContainer: {gratuitiesSelector: "", gratuitiesText: ""},
        freeInclusionsContainer: {freeSelector: "", freeText: ""},
        childDiscountInsclusionsContainer: {childDiscountSelector: "", childDiscountText: ""},
        notesInclusionsContainer: {notesTex: ""},
    })

    const [generalTerms, setGeneralTerms] = useLocalStorage("generalterms", {
        cancelationPolicyContainer: {cancelationSelector: "", totalCancelationText: "", partialCancelationText: ""},
        paymentTermsPolicyContainer: {paymentSelector: "", paymentText: ""},
        bankDetailsContainer: {bankSelector: "", bankText: ""}
    })

    const [globalItineraries, setGlobalItineraries] = useLocalStorage("globalItineraries", {});

    return (
        <CounterContext.Provider value={{
            numOfPaxData, setNumOfPaxData,
            hotelFormData, setHotelFormData,
            localGuidesFormData, setLocalGuidesFormData,
            activitiesFormData, setActivitiesFormData,
            formHeaderValues, setFormHeaderValues,
            finalRrpPerTier, setFinalRrpPerTier,
            hotelInclusions, setHotelInclusions,
            hotelInclusionsExtras, setHotelInclusionsExtras,
            servicesInclusions, setServicesInclusions,
            generalTerms, setGeneralTerms,
            globalItineraries, setGlobalItineraries,
        }}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider