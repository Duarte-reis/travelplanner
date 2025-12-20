import "../../index.css"
import HotelForm from "./HotelForm"
import LocalGuidesForm from "./LocalGuidesForm"
import TourGuideForm from "./TourGuideForm"
import ActivitiesForm from "./ActivitiesForm"
import TransportationForm from "./TransportationForm"
import FlightTrainForm from "./FlightTrainForm"
import ExtrasForm from "./ExtrasForm"
import Bar from "../Bar"
import PaxTiers from "./PaxTiers"
import FreeButton from "../FreeButton"
import TextBox from "../TextBox"
import AddNewElementBtn from "../AddNewElementBtn"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { useEffect } from "react"

function FormComplete() {

    /* ---- Number of Pax + Free, displayed in Pax Tiers ---- */

    const { numOfPaxData, setNumOfPaxData } = useContext(CounterContext);
    
    /* ---- Update Hotel Form - Save information and allow creating new forms --- */

    const { hotelFormData, setHotelFormData } = useContext(CounterContext);

    const updateHotelFormData = (formIndex, section, key, index, value) => {
        const updated = [...hotelFormData];
        updated[formIndex] = {
            ...updated[formIndex],
            [section]: updated[formIndex][section].map((item, i) =>
                i === index ? { ...item, [key]: value } : item
            )
        };
        setHotelFormData(updated);
    };

    const addHotelForm = () => {
        setHotelFormData([
            ...hotelFormData,
            {
                dateContainer: [{day:"", date:""}],
                cityContainer: [{city: ""}], 
                hotelContainer: [{hotel: ""}], 
                hotelPriceContainer: [{hotelPrice: ""}], 
                singleSupplementContainer: [{singleSupplement: ""}], 
                mealPlanContainer: [{mealPlan: ""}], 
                dinnerContainer: [{dinner: ""}], 
                dinnerPriceContainer: [{dinnerPrice: ""}], 
                lunchContainer: [{lunch: ""}], 
                lunchPriceContainer: [{lunchPrice: ""}], 
                guideSelectorContainer: [{guideSelector: ""}], 
                driverSelectorContainer: [{driverSelector: ""}],
            }
        ])
    }

    /* ---- Add the Hotel Form total and send it to NET ---- */

    const hotelPriceTotal = hotelFormData.reduce((sum, form) => {
        const roomPrice = parseFloat(form.hotelPriceContainer[0]?.hotelPrice || 0);
        const dinnerPrice = parseFloat(form.dinnerPriceContainer[0]?.dinnerPrice || 0);
        const lunchPrice = parseFloat(form.lunchPriceContainer[0]?.lunchPrice || 0);
        return sum + roomPrice + dinnerPrice + lunchPrice;
    }, 0);

    // Single supplement is calculated separately
    
    const { setSingleSupplementTotal } = useContext(CounterContext);

    const singleSupplementTotal = hotelFormData.reduce((sum, form) => {
        const singleSupplement = parseFloat(form.singleSupplementContainer[0]?.singleSupplement || 0);
        return sum + singleSupplement
    }, 0);

    useEffect(() => {
        setSingleSupplementTotal(singleSupplementTotal);
    }, [JSON.stringify(singleSupplementTotal)]);

    /* ---- Update Local Guides Form - Save information and allow creating new forms --- */

    const { localGuidesFormData, setLocalGuidesFormData } = useContext(CounterContext) 

    const updateLocalGuidesFormData = (
        formIndex,
        section,
        key,
        lineIndex,
        value
        ) => {
        const updatedForms = [...localGuidesFormData];

        const form = updatedForms[formIndex];
        const sectionData = form[section];

        const updatedSection = sectionData.map((line, i) =>
            i === lineIndex
            ? { ...line, [key]: value }
                : line
            );

            updatedForms[formIndex] = {
                ...form,
                [section]: updatedSection,
            };

        setLocalGuidesFormData(updatedForms);
    };

    const addLocalGuidesForm = () => {
        setLocalGuidesFormData([
            ...localGuidesFormData,
            {
                serviceNameContainer: [{serviceName: ""}],
                price1Container: [{price1: ""}],
                price2Container: [{price2: ""}],
                price3Container: [{price3: ""}],
                price4Container: [{price4: ""}],
                price5Container: [{price5: ""}],
                price6Container: [{price6: ""}],
                price7Container: [{price7: ""}],
                checkButtonContainer: [{checkButton: false}],
            }
        ])
    }

    /* ---- Divide each Local Guides tier for the respective number of pax. Ignore the ones marked as "optional" ---- */

    const getLocalGuidesPerPax = (
        priceContainerKey, 
        tierKey
        ) => {
        const total = localGuidesFormData.reduce((sum, form) => {
            const isChecked = form.checkButtonContainer[0]?.checkButton; // There's only one CheckButton
            if (isChecked) return sum; // If it's checked, ignore it

            const price = parseFloat(form[priceContainerKey][0]?.[priceContainerKey.replace("Container", "")] || 0);
            return sum + price;
        }, 0);

        const pax = parseInt(numOfPaxData[0][tierKey].numOfPax) || 1;
        return Math.round(total / pax);
    };

    const localGuidesPerPaxTier1 = getLocalGuidesPerPax("price1Container", "paxTier1");
    const localGuidesPerPaxTier2 = getLocalGuidesPerPax("price2Container", "paxTier2");
    const localGuidesPerPaxTier3 = getLocalGuidesPerPax("price3Container", "paxTier3");
    const localGuidesPerPaxTier4 = getLocalGuidesPerPax("price4Container", "paxTier4");
    const localGuidesPerPaxTier5 = getLocalGuidesPerPax("price5Container", "paxTier5");
    const localGuidesPerPaxTier6 = getLocalGuidesPerPax("price6Container", "paxTier6");
    const localGuidesPerPaxTier7 = getLocalGuidesPerPax("price7Container", "paxTier7");

    /* ---- Update Tour Guide Form - Save information and allow creating new forms --- */

    const {tourGuideFormData, setTourGuideFormData} = useContext(CounterContext)

    const updateMultiplicationData = (
        formIndex,
        section,
        key,
        index,
        value
        ) => {
        const updated = [...tourGuideFormData];

        updated[formIndex] = {
            ...updated[formIndex],
            [section]: updated[formIndex][section].map((line, i) =>
            i === index ? { ...line, [key]: value }: line),
        };

        setTourGuideFormData(updated);
    };

    const addTourGuideForm = () => {
        setTourGuideFormData([
            ...tourGuideFormData,
            {
                multiplicationPrice: [{ pricePerDay: "", numOfDays: "" }],
                guideLandExpensesContainer: [{guideLandExpenses: ""}],
                multiplicationMeals: [{ pricePerDay: "", numOfDays: "" }],
                multiplicationAccommodation: [{ pricePerDay: "", numOfDays: "" }],
                checkButtonContainer: [{checkButtonContainer: false}],
            }
        ]);
    };

    /* ---- Sum the Tour Guide --- */

    const sumTourGuideMultiplication = (arr = []) =>
        arr.reduce((sum, item) => {
            const landPrice = parseFloat(item.guideLandExpenses) || 0;
            const price = parseFloat(item.pricePerDay) || 0;
            const days = parseFloat(item.numOfDays) || 0;
            return sum + landPrice + price * days;
        }, 0)
    
    /* ---- The Land TextBox (guideLandExpenses) displays a value only if the corresponding Selector in the HotelForm is "Yes" and divides it by the number of pax. The Land TextBox, in TourGuideForm.jsx, receives the value from hotelPrice, singleSupplement, dinnePrice and lunchPrice - this value corresponds to the guide expenses. ---- */

    const applyGuideExpensesArray = hotelFormData.map(
        (hotel) => hotel.guideSelectorContainer?.[0]?.guideSelector
    );

    const hotelExpensesTotalPerTourGuide = hotelFormData.reduce((sum, hotel, idx) => {
        if (applyGuideExpensesArray[idx] === "Yes") {
            const roomPrice = parseFloat(hotel.hotelPriceContainer[0]?.hotelPrice || 0);
            const singleSupplement = parseFloat(hotel.singleSupplementContainer[0]?.singleSupplement || 0);
            const dinnerPrice = parseFloat(hotel.dinnerPriceContainer[0]?.dinnerPrice || 0);
            const lunchPrice = parseFloat(hotel.lunchPriceContainer[0]?.lunchPrice || 0);
            return sum + roomPrice + singleSupplement + dinnerPrice + lunchPrice;
        }
        return sum;
    }, 0);
    
    /* ---- If the selector is "Yes", the Land TextBox value is added to the Meals and Accommodation TextBoxes. Note: Meals and Accommodation are not affected by the selector ---- */

    const tourGuideTotalPerForm = tourGuideFormData.map((form) => {
        return (
            sumTourGuideMultiplication(form.multiplicationPrice) +
            hotelExpensesTotalPerTourGuide +
            sumTourGuideMultiplication(form.multiplicationMeals) +
            sumTourGuideMultiplication(form.multiplicationAccommodation)
        );
    });

    /* ---- The total will be sent to NET and divided by the number of Pax ---- */

    const tourGuidePerTier = Object.values(numOfPaxData[0]).map((tier) => {
        const pax = parseInt(tier.numOfPax) || 1;
        const totalForTier = tourGuideFormData.reduce((sum, form, formIdx) => { // Sum the forms not checked by CheckButton
            const isChecked = form.checkButtonContainer?.[0]?.checkButton;
            if (isChecked) return sum; // Ignore the checked forms
            return sum + tourGuideTotalPerForm[formIdx];
        }, 0);
        return Math.round(totalForTier / pax) // divide by the number of pax
    });

    /* ---- Update Activities Form - Save information and allow creating new forms --- */
    
    const { activitiesFormData, setActivitiesFormData } = useContext(CounterContext)

    const updateActivityField = (formIndex, section, key, index, value) => {
        const updated = [...activitiesFormData];
            updated[formIndex] = {...updated[formIndex], 
                [section]: updated[formIndex][section].map((item, i) => 
                    i === index ? { ...item, [key]: value } : item ),
        };
        setActivitiesFormData(updated);
    };

    const addActivityForm = () => {
        setActivitiesFormData([
            ...activitiesFormData,
            {
                nameOfActivityContainer:[{nameOfActivity:""}],
                pricePerPersonContainer:[{pricePerPerson:""}],
                checkButtonContainer: [{checkButton: false}],
            }
        ])
    }

    /* ---- The value in pricePerPerson will be sent to NET --- */

    // This const calculates the total sum of all activity prices, but only includes the prices whose CheckButton is NOT checked.
    const activityPriceTotal = activitiesFormData.flatMap(form =>
        form.pricePerPersonContainer.map((priceObj, index) => {
            const isChecked = form.checkButtonContainer[index]?.checkButton;
            return isChecked ? 0 : parseFloat(priceObj.pricePerPerson) || 0;
        })
    ).reduce((sum, value) => sum + value, 0);

    /* ---- Update Transportation Form - Save information and allow creating new forms --- */

    const {transportationFormData, setTransportationFormData} = useContext(CounterContext)

    const updateTransportationData = (formIndex, section, key, index, value) => {
        const updated = [...transportationFormData];
        updated[formIndex] = {
            ...updated[formIndex], 
            [section]: updated[formIndex][section].map ((line, i) => 
                i === index ? { ...line, [key]: value } : line )};
        setTransportationFormData(updated);
    };

    const addTransportationForm = () => {
        setTransportationFormData ([
            ...transportationFormData,
            {
                priceOfVehicleContainer: [{typeOfVehicle:"", priceOfVehicle:""}],
                driverLandExpensesContainer: [{driverLandExpenses: ""}],
                multiplicationDriverMeals:[{pricePerDay:"", numOfDays:""}],
                multiplicationDriverAccommodation:[{pricePerDay:"", numOfDays:""}],
                checkButtonContainer: [{checkButton: ""}],
            }
        ])
    }

    /* ---- Sum the Transportation Form --- */

    const sumTransportationFormData = (arr = []) => 
        arr.reduce((sum, item) => {
            const vehiclePrice = parseFloat(item.priceOfVehicle) || 0;
            const landPrice = parseFloat(item.driverLandExpenses) || 0;
            const driverExpensesPrice = parseFloat(item.pricePerDay) || 0;
            const driverExpensesDays = parseFloat(item.numOfDays) || 0;
            return sum + landPrice + vehiclePrice + driverExpensesPrice * driverExpensesDays;
        }, 0)
    
    /* ---- The Land TextBox, in the Transportation form, displays a value only if the corresponding Selector in the HotelForm is "Yes" and divides it by the number of pax. The Land TextBox, in the TransportationForm.jsx, receives the value from hotelPrice, singleSupplement, dinnePrice and lunchPrice ---- */

    const applyDriverExpensesArray = hotelFormData.map((hotel) => hotel.driverSelectorContainer?.[0]?.driverSelector);

    const hotelExpensesTotalPerDriver = hotelFormData.reduce((sum, hotel, idx) => {
        if (applyDriverExpensesArray[idx] === "Yes") {
            const roomPrice = parseFloat(hotel.hotelPriceContainer[0]?.hotelPrice || 0);
            const singleSupplement = parseFloat(hotel.singleSupplementContainer[0]?.singleSupplement || 0);
            const dinnerPrice = parseFloat(hotel.dinnerPriceContainer[0]?.dinnerPrice || 0);
            const lunchPrice = parseFloat(hotel.lunchPriceContainer[0]?.lunchPrice || 0);
            return sum + roomPrice + singleSupplement + dinnerPrice + lunchPrice
        }
        return sum;
    }, 0)

    /* ---- If the selector is "Yes", the Land TextBox value is added to the Meals and Accommodation TextBoxes. Note: Meals and Accommodation are not affected by the selector ---- */

    const driverTotalPerFrorm = transportationFormData.map((form) => {
        return (
            sumTransportationFormData(form.priceOfVehicleContainer) +
            sumTransportationFormData(form.driverLandExpensesContainer) + hotelExpensesTotalPerDriver +
            sumTransportationFormData(form.multiplicationDriverMeals) +
            sumTransportationFormData(form.multiplicationDriverAccommodation)
        )
    })

    /* ---- The total will be sent to NET and divided by the number of Pax, unless the CheckButton is checked ---- */

    const transportationPerTier = Object.values(numOfPaxData[0]).map((tier) => {
        const pax = parseInt(tier.numOfPax) || 1;
        const totalForTier = transportationFormData.reduce((sum, form, formIdx) => { // Sum the forms not checked by CheckButton
            const isChecked = form.checkButtonContainer?.[0]?.checkButton; 
            if (isChecked) return sum; // Ignore the checked forms
            return sum + driverTotalPerFrorm[formIdx]; // sum total
        }, 0);
        return Math.round(totalForTier / pax); // divide by the number of pax
    });

    /* ---- Update Extras Form and save information. There's no need to create new forms --- */
    
    const {extrasFormData, setExtrasFormData} = useContext(CounterContext)

    const updateExtrasMultiplicationData = (formIndex, section, key, index, value) => { // Updates the results inside Multiplications
        const updated = [...extrasFormData];
        updated[formIndex] = {...updated[formIndex],[section]: updated[formIndex][section].map((line, i) => i === index ? { ...line, [key]: value } : line )
        };
        setExtrasFormData(updated);
    };

    const updateExtrasCheckData = (formIndex, key, value) => { // Updates the results marked with CheckButton
        const updated = [...extrasFormData];
        updated[formIndex] = {
            ...updated[formIndex],
            [key]: value
        };
        setExtrasFormData(updated);
    };  

    /* ---- Add Extras values and send it to NET (unless the CheckButton is checked) ---- */

    const extrasPriceTotal = extrasFormData.reduce((grandTotal, form) => { // Starts a global calculation that loops through every extras form
        const headsetsTotal = form.multiplicationHeadsets.reduce((total, item) => // Calculates the total cost for the “Headsets” section.
            total + ((parseFloat(item.pricePerDay) || 0) * (parseFloat(item.numOfDays) || 0)) // For each row, multiplies price × days.
        , 0); // Uses 0 as default

        const bellmanTotal = form.multiplicationBellman.reduce((total, item) => // Calculates de total cost for the "Bellman" section.
            total + ((parseFloat(item.pricePerDay) || 0) * (parseFloat(item.numOfDays) || 0)) // For each row, multiplies price x days.
        , 0); // Uses 0 as default

        const gratuitiesTotal = form.multiplicationGratuities.reduce((total, item) => // Calcultates the total cost for the "Gratuities" section.
            total + ((parseFloat(item.pricePerDay) || 0) * (parseFloat(item.numOfDays) || 0)) // For each row, multiplies price x days.
        , 0); // Uses 0 as default

        const formTotal = // Creates the total for each form.
            (form.checkHeadsets ? 0 : headsetsTotal) + // If the checkbox is ON, ignore the value (use 0)
            (form.checkBellman ? 0 : bellmanTotal) +
            (form.checkGratuities ? 0 : gratuitiesTotal);

        return grandTotal + formTotal;
    }, 0); // Starts the global total at zero.

    const [extrasTotal, setExtrasTotal] = useLocalStorage("extrastotal", 0);

    const updateExtrasTotal = (totalExtras) => {
        setExtrasTotal(totalExtras);
    }
    
    /* ---- Update Flight/Train Form - Save information and create new forms --- */
    
    const {flightTrainFormData, setFlightTrainFormData} = useContext(CounterContext)

    const addFlightTrainFormData = () =>
        setFlightTrainFormData([
            ...flightTrainFormData,
            {
                flightOrTrainSelectorContainer: [{flightOrTrainSelector: ""}],
                companyContainer: [{company:""}],
                routeContainer: [{route:""}],
                fareContainer: [{fare:""}],
                taxContainer: [{tax:""}],
                flightTrainGuideSelectorContainer: [{flightTrainGuideSelector:""}],
                checkButtonContainer: [{checkButton: false}]
            }
        ]);
    
    const updateFlightTrainFormData = (formIndex, section, key, index, value) => {
        const updated = [...flightTrainFormData];
        updated[formIndex] = {
            ...updated[formIndex], 
            [section]: updated[formIndex][section].map((item, i) =>
                i === index ? { ...item, [key]: value } : item
            )
        };
        setFlightTrainFormData(updated);
    };

    /* ---- Fare + Tax represents the price per person. If a flight or train ticket for the guide is required, selecting "Yes" will add the guide's cost, divided evenly among all Pax Tiers ---- */

    const flightTrainPerTier = Object.values(numOfPaxData[0]).map(tier => {
        const pax = parseInt(tier.numOfPax) || 1;

        return flightTrainFormData.reduce((sum, form) => {
            const isChecked = form.checkButtonContainer?.[0]?.checkButton; // Is button checked?
            if (isChecked) return sum; // If it's checked, ignore it (goes to FinalOfferOptional.jsx)

            const farePrice = parseFloat(form.fareContainer[0]?.fare || 0);
            const taxPrice = parseFloat(form.taxContainer[0]?.tax || 0);
            const totalPerPerson = farePrice + taxPrice;

            if (form.flightTrainGuideSelectorContainer?.[0]?.flightTrainGuideSelector === "Guide: Yes") {
                return sum + totalPerPerson + Math.round(totalPerPerson / pax);
            } else {
                return sum + totalPerPerson;
            }

        }, 0);
    });

    /* ---- This function was created to send the value of the guide's ticket expenses, to TourGuideForm.jsx and display it in the Land TextBox ---- */

    const applyFlightTrainGuideExpensesArray = flightTrainFormData.map((form) => form.flightTrainGuideSelectorContainer?.[0]?.flightTrainGuideSelector);

    const flightTrainGuideExpenses = flightTrainFormData.reduce((sum, form, idx) => {
        if (applyFlightTrainGuideExpensesArray[idx] === "Guide: Yes") {
            const farePrice = parseFloat(form.fareContainer[0]?.fare || 0);
            const taxPrice = parseFloat(form.taxContainer[0]?.tax || 0);
            return sum + farePrice + taxPrice;
        }
        return sum;
    }, 0)

    /* ---- Control the Type Of Free ---- */

    const [activeIndex, setActiveIndex] = useLocalStorage("activeindex", 1); // Twin button active by default (1)

    /* ---- Generate profit margin and add it to NET to generate RRP ---- */

    const [profitMargin, setProfitMargin] = useLocalStorage("profitmargin", 12);

    /* ---- Generate comission margin and add it to NET to generate RRP ---- */

    const [comissionMargin, setComissionMargin] = useLocalStorage("comissionmargin", 0);

    /* ---- First, We need to calculate the NET price per paying passenger (numOfPax). The "free" passenger doesn't pay, but their cost must be distributed among the paying passengers. ---- */

    const finalNetPerPayingPaxArray = Object.values(numOfPaxData[0]).map((tier, idx) => {
        const numOfPax = Number(tier.numOfPax);
        const free = Number(tier.free);
        // Sum all the values inserted in each component to generate the NET value per paying pax
        let netPerPayingPax =
            hotelPriceTotal +
            flightTrainPerTier[idx] +
            extrasPriceTotal +
            activityPriceTotal +
            (idx === 0 ? localGuidesPerPaxTier1 : 0) +
            (idx === 1 ? localGuidesPerPaxTier2 : 0) +
            (idx === 2 ? localGuidesPerPaxTier3 : 0) +
            (idx === 3 ? localGuidesPerPaxTier4 : 0) +
            (idx === 4 ? localGuidesPerPaxTier5 : 0) +
            (idx === 5 ? localGuidesPerPaxTier6 : 0) +
            (idx === 6 ? localGuidesPerPaxTier7 : 0) +
            tourGuidePerTier[idx] +
            transportationPerTier[idx];
        // If we choose "sgl", in the FreeType, we have to calculate the singleSupplement * the number of Free and divide by the number of paying pax. This means that the Frees will stay in a single room
        if (activeIndex === 0 && free > 0) { // 0 = sgl
            netPerPayingPax += singleSupplementTotal * (free / numOfPax); // += adds the calculated single supplement for the Free passengers to the existing netPerPayingPax instead of replacing it.
        }
        // Add the cost of the free passengers and distribute it evenly among the corresponding number of paying passengers.
        return netPerPayingPax + (netPerPayingPax * free) / numOfPax;
    });

    // Add the margin to NET and generate Rrp
    const marginPerTier = finalNetPerPayingPaxArray.map(netValue =>
        Math.round(netValue * (profitMargin / 100)) // Converts % to decimal number
    );
    
    // Add the comission to NET and generate Rrp
    const comissionPerTier = finalNetPerPayingPaxArray.map(netValue =>
        Math.round(netValue * (comissionMargin / 100))
    );

    // Rrp per pax per tier
    const finalRrpPerTier = finalNetPerPayingPaxArray.map((netValue, idx) => 
        netValue + marginPerTier[idx] + comissionPerTier[idx]
    );

    const { setFinalRrpPerTier } = useContext(CounterContext);

    useEffect(() => { // Whenever finalRrpPerTier changes, the useEffect triggers, calls setFinalRrpPerTier(finalRrpPerTier), and updates the global Context so other components can access the updated RRP values.
        setFinalRrpPerTier(finalRrpPerTier);
    }, [JSON.stringify(finalRrpPerTier)]);

    return (
        <section id="form_complete">
            <div className="hotel_form_complete">
                <Bar 
                    barContent= {["Accommodation and meals"]}
                />
                
                {hotelFormData.map((form, index) => (
                    <HotelForm
                        key={index}
                        formIndex={index}
                        hotelFormData={hotelFormData}
                        setHotelFormData={setHotelFormData}
                        days={hotelFormData
                            .slice(0, index)
                            .reduce((sum, form) => sum + form.dateContainer.length, 0)
                        }
                        cityContainer={form.cityContainer}
                        hotelContainer={form.hotelContainer}
                        hotelPriceContainer={form.hotelPriceContainer}
                        singleSupplementContainer={form.singleSupplementContainer}
                        mealPlanContainer={form.mealPlanContainer}
                        dinnerContainer={form.dinnerContainer}
                        dinnerPriceContainer={form.dinnerPriceContainer}
                        guideSelectorContainer={form.guideSelectorContainer}
                        driverSelectorContainer={form.driverSelectorContainer}
                        lunchContainer={form.lunchContainer}
                        lunchPriceContainer={form.lunchPriceContainer}
                        dateContainer={form.dateContainer}
                        updateHotelFormData={updateHotelFormData}
                    />
                ))}
                <AddNewElementBtn
                    onAdd={addHotelForm}
                    text="Add another line"
                />
            </div>
            
            <div className="local_guides_tour_guide_container_form_complete"> 
                <div className="local_guides_form_complete">
                    <Bar 
                        barContent = {["Local Guides"]}
                    />
                    {localGuidesFormData.map((form, index) => (
                        <LocalGuidesForm 
                            key={index}
                            formIndex={index}
                            numOfPaxData={form.numOfPaxData}
                            updateLocalGuidesFormData={updateLocalGuidesFormData}
                            serviceNameContainer={form.serviceNameContainer}
                            price1Container={form.price1Container}
                            price2Container={form.price2Container}
                            price3Container={form.price3Container}
                            price4Container={form.price4Container}
                            price5Container={form.price5Container}
                            price6Container={form.price6Container}
                            price7Container={form.price7Container}
                            checkButtonContainer={form.checkButtonContainer}
                        />
                    ))}
                    <AddNewElementBtn
                        onAdd={addLocalGuidesForm}
                        text="Add another line"
                    />
                </div>

                <div className="tour_guide_form_complete">
                    {tourGuideFormData.map((form, formIndex) => (
                        <TourGuideForm
                            key={formIndex}
                            formIndex={formIndex}
                            tourGuideFormData={tourGuideFormData}
                            setTourGuideFormData={setTourGuideFormData}
                            multiplicationPrice={form.multiplicationPrice}
                            guideLandExpensesContainer={form.guideLandExpensesContainer}
                            multiplicationMeals={form.multiplicationMeals}
                            multiplicationAccommodation={form.multiplicationAccommodation}
                            checkButtonContainer={form.checkButtonContainer}
                            updateMultiplicationData={updateMultiplicationData}
                            addTourGuideForm={addTourGuideForm}
                            hotelExpenses={hotelExpensesTotalPerTourGuide}
                            flightTrainGuideExpenses={flightTrainGuideExpenses}
                        />
                    ))}
                </div>
            </div>

            <div className="activities_transportation_form_complete">
                <div className="activities_form_complete">
                    <Bar 
                        barContent = {["Admissions"]}
                    />
                    {activitiesFormData.map((form, index) => (
                        <ActivitiesForm 
                            key={index}
                            formIndex={index}
                            activitiesFormData={activitiesFormData}
                            setActivitiesFormData={setActivitiesFormData}
                            nameOfActivityContainer={form.nameOfActivityContainer}
                            pricePerPersonContainer={form.pricePerPersonContainer}
                            checkButtonContainer={form.checkButtonContainer}
                            updateActivityField={updateActivityField}
                        />
                    ))}
                    <AddNewElementBtn
                        onAdd={addActivityForm}
                        text="Add another line"
                    />
                </div> 
                <div className="transportation_form_complete">
                    {transportationFormData.map((form, index) => (
                        <TransportationForm 
                            key={index}
                            formIndex={index}
                            updateTransportationData={updateTransportationData}
                            addTransportationForm={addTransportationForm}
                            priceOfVehicleContainer={form.priceOfVehicleContainer}
                            multiplicationDriverMeals={form.multiplicationDriverMeals}
                            multiplicationDriverAccommodation={form.multiplicationDriverAccommodation}
                            driverLandExpensesContainer={form.driverLandExpensesContainer}
                            checkButtonContainer={form.checkButtonContainer}
                            hotelExpenses={hotelExpensesTotalPerDriver}
                        />
                    ))}
                </div>
            </div>

            <div className="flight_train_extras_form_complete">
                <div className="flight_train_form_complete">
                    <Bar 
                        barContent = {["Flight/Train"]}
                    />
                    {flightTrainFormData.map((form, index) => (
                        <FlightTrainForm 
                            key={index}
                            formIndex={index}
                            companyContainer={form.companyContainer}
                            routeContainer={form.routeContainer}
                            fareContainer={form.fareContainer}
                            taxContainer={form.taxContainer}
                            flightOrTrainSelectorContainer={form.flightOrTrainSelectorContainer}
                            flightTrainGuideSelectorContainer={form.flightTrainGuideSelectorContainer}
                            updateFlightTrainFormData={updateFlightTrainFormData}
                            checkButtonContainer={form.checkButtonContainer}
                        />
                    ))}                
                    <AddNewElementBtn 
                        onAdd={addFlightTrainFormData}
                        text="Add another line"
                    />
                </div>
                <div className="extras_form_complete">
                    {extrasFormData.map((form, formIndex) => (
                        <ExtrasForm
                            key={formIndex}
                            formIndex={formIndex}
                            multiplicationHeadsets={form.multiplicationHeadsets}
                            multiplicationBellman={form.multiplicationBellman}
                            multiplicationGratuities={form.multiplicationGratuities}
                            checkHeadsets={form.checkHeadsets}
                            checkBellman={form.checkBellman}
                            checkGratuities={form.checkGratuities}
                            updateExtrasCheckData={updateExtrasCheckData}
                            updateExtrasMultiplicationData={updateExtrasMultiplicationData}
                            sendTotalToNet={updateExtrasTotal}
                        />
                    ))}
                </div>
            </div> 

            <div className="price_tiers_form_complete">
                <div className="pax_plus_free_container">
                    <Bar 
                        barContent = {["Pax + free"]}
                    />    
                    <div className="pax_plus_free_content">
                        <PaxTiers
                            index={0}
                            numOfPaxData={numOfPaxData}
                            setNumOfPaxData={setNumOfPaxData}
                        />
                    </div>
                </div>

                <div className="type_of_free_container">
                    <Bar 
                        barContent = {["Free type"]}
                    />    
                    <div className="type_of_free_content">
                        {Object.values(numOfPaxData[0]).map((_,idx) => (
                            <FreeButton
                                key={idx}
                                activeIndex={activeIndex}
                                setActiveIndex={setActiveIndex}
                            />
                        ))}
                    </div>
                </div>

                <div className="total_net_container">
                    <Bar 
                        barContent = {["NET"]}
                    />    
                    <div className="total_net_content">
                        {finalNetPerPayingPaxArray.map((netValue, idx) => (
                            <TextBox 
                                key={idx} 
                                value={Math.round(netValue) + "€"} 
                                readOnly 
                            />
                        ))}
                    </div>
                </div>

                <div className="profit_margin_container">
                    <Bar 
                        barContent = {["Margin"]}
                    />    
                    <div className="margin_content">
                        {finalNetPerPayingPaxArray.map((_, idx) => (
                            <div className="margin_display_container" key={idx}>
                                <TextBox
                                    value={profitMargin}
                                    onChange={(value) => setProfitMargin(Number(value))}
                                />
                                <p>%</p>
                                <TextBox 
                                    value={marginPerTier[idx] + "€"} 
                                    readOnly 
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="client_comission_container">
                    <Bar 
                        barContent = {["C. Comission"]}
                    />    
                    <div className="comission_content">
                        {finalNetPerPayingPaxArray.map((_, idx) => (
                            <div className="comission_display_container" key={idx}>
                                <TextBox
                                    value={comissionMargin}
                                    onChange={(value) => setComissionMargin(Number(value))}
                                />
                                <p>%</p>
                                <TextBox 
                                    value={comissionPerTier[idx] + "€"} 
                                    readOnly 
                                />
                            </div>
                        ))}
                    </div>
                </div>    
                <div className="price_per_pax_container">
                    <Bar 
                        barContent = {["RRP"]}
                    />    
                    <div className="price_per_pax_content">
                        {finalRrpPerTier.map((rrpValue, idx) => (
                            <TextBox
                                key={idx}
                                value={Math.round(rrpValue) + "€"}
                                readOnly
                            />
                        ))}
                    </div>
                   
                </div>
                <div className="single_supplement_container">
                    <Bar 
                        barContent = {["S. Single"]}
                    />
                    {Object.values(numOfPaxData[0]).map((tier, idx) => (
                        <TextBox
                            key={idx}
                            className="class"
                            value={singleSupplementTotal + "€"}
                            readOnly
                        />
                    ))}
                </div>
            </div> 
        </section>
    )
}

export default FormComplete




