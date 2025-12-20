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

    const [localGuidesFormData, setLocalGuidesFormData] = useLocalStorage(
        "localguidesformdata",
        Array.from({ length: 7 }, () => ({
            serviceNameContainer: [{ serviceName: "" }],
            price1Container: [{ price1: "" }],
            price2Container: [{ price2: "" }],
            price3Container: [{ price3: "" }],
            price4Container: [{ price4: "" }],
            price5Container: [{ price5: "" }],
            price6Container: [{ price6: "" }],
            price7Container: [{ price7: "" }],
            checkButtonContainer: [{ checkButton: false }],
        }))
    );

    const [activitiesFormData, setActivitiesFormData] = useLocalStorage(
        "activitiesformdata",
        Array.from({ length: 7 }, () => ({
            nameOfActivityContainer: [{ nameOfActivity: "" }],
            pricePerPersonContainer: [{ pricePerPerson: "" }],
            checkButtonContainer: [{checkButton: false}]
        }))
    )

    const [formHeaderValues, setFormHeaderValues] = useLocalStorage("formheadervalues", {
        topSection: { year: "", startDate: "", endDate: "" },
        middleSection: { destination: "", groupName: "", clientName: "", language: "", currency: "" },
        bottomSection: { tripTitle: "" },
        notesSection: { notes: "" },
    });

    const [finalRrpPerTier, setFinalRrpPerTier] = useLocalStorage("finalRrpPerTier", []);

    const [singleSupplementTotal, setSingleSupplementTotal] = useLocalStorage("singleSupplementTotal", []);

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
        supplement: {supplementSelector: "", multiplication: { pricePerDay: 0, numOfDays: 0 }, supplementText: "", supplementTotal: 0}
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

    const [includeOptions, setIncludeOptions] = useLocalStorage("includeoptions", {
        tier1: false,
        tier2: false,
        tier3: false,
        tier4: false,
        tier5: false,
        tier6: false,
        tier7: false,
    });

    const [checkButton, setCheckButton] = useLocalStorage("checkButton", false);

    // If we say an activity is optional (CheckButton = true), send the information to FinalOfferOptional.jsx
    const [checkedActivities, setCheckedActivities] = useLocalStorage("checkedActivities", []);

    useEffect(() => { // Run this effect whenever activitiesFormData changes
        const selected = activitiesFormData.flatMap((form) => // Loop over each activity form and flatten the result
            form.pricePerPersonContainer.map((priceObj, index) => { // Loop over each price per person in the current form
                if (form.checkButtonContainer[index]?.checkButton) { // If the corresponding CheckButton is checked
                    return { // Return an object containing the activity name and its price
                        activityName: form.nameOfActivityContainer[index]?.nameOfActivity || "", // Take the activity name or empty string
                        price: parseFloat(priceObj.pricePerPerson) || 0 // Parse the price as float or default to 0
                    };
                }
                return null; // If CheckButton is not checked, return null
            }).filter(item => item) // Remove all null values from the array
        );
        setCheckedActivities(selected); // Update the localStorage state with only the checked activities
    }, [activitiesFormData, setCheckedActivities]); // Run when activitiesFormData or setCheckedActivities changes

    // If we say a Local Guide is optional (CheckButton = true), send the information to FinalOfferOptional.jsx
    const [checkedLocalGuides, setCheckedLocalGuides] = useLocalStorage("checkedLocalGuides", []);

    useEffect(() => { // Run this effect whenever localGuidesFormData changes
        const selected = localGuidesFormData.flatMap((form) => {
            if (form.checkButtonContainer[0]?.checkButton) { // Only include forms where CheckButton is checked
                return [{ // Return an object containing relevant info
                    serviceName: form.serviceNameContainer[0]?.serviceName || "",
                    prices: [
                        parseFloat(form.price1Container[0]?.price1 || 0),
                        parseFloat(form.price2Container[0]?.price2 || 0),
                        parseFloat(form.price3Container[0]?.price3 || 0),
                        parseFloat(form.price4Container[0]?.price4 || 0),
                        parseFloat(form.price5Container[0]?.price5 || 0),
                        parseFloat(form.price6Container[0]?.price6 || 0),
                        parseFloat(form.price7Container[0]?.price7 || 0),
                    ]
                }];
            }
            return []; // If CheckButton is not checked, return empty array
        });
        setCheckedLocalGuides(selected); // Update the localStorage state with only the checked local guides
    }, [localGuidesFormData, setCheckedLocalGuides]); // Run when localGuidesFormData or setCheckedLocalGuides changes

    const [flightTrainFormData, setFlightTrainFormData] = useLocalStorage(
        "flighttrainformdata",
        Array.from({ length: 4 }, () => ({
            flightOrTrainSelectorContainer: [{flightOrTrainSelector: ""}],
            companyContainer: [{company:""}],
            routeContainer: [{route:""}],
            fareContainer: [{fare:""}],
            taxContainer: [{tax:""}],
            flightTrainGuideSelectorContainer: [{flightTrainGuideSelector:""}],
            checkButtonContainer: [{checkButton: false}]
        }))
    )

    const [checkedFlightTrain, setCheckedFlightTrain] = useLocalStorage("checkedflighttrain", []);

    useEffect(() => {
        const selected = flightTrainFormData
            .filter(form => form.checkButtonContainer?.[0]?.checkButton)
            .map(form => ({
                selector: form.flightOrTrainSelectorContainer?.[0]?.flightOrTrainSelector || "",
                route: form.routeContainer?.[0]?.route || "",
                price:
                    (parseFloat(form.fareContainer?.[0]?.fare || 0) +
                     parseFloat(form.taxContainer?.[0]?.tax || 0))
            }));

        setCheckedFlightTrain(selected);
    }, [flightTrainFormData]);

    const [extrasFormData, setExtrasFormData] = useLocalStorage("extrasformdata", [
        {
            multiplicationHeadsets:[{pricePerDay:"", numOfDays:""}],
            multiplicationBellman:[{pricePerDay:"", numOfDays:""}],
            multiplicationGratuities:[{pricePerDay:"", numOfDays:""}],
            checkHeadsets: false,
            checkBellman: false,
            checkGratuities: false,
            totalExtras: 0,
        }
    ]);

    const [checkedExtras, setCheckedExtras] = useLocalStorage("checkedextras", []);

    useEffect(() => {
        const updatedCheckedExtras = extrasFormData.map(form => ({
            headsets: form.multiplicationHeadsets.reduce(
                (sum, item) => sum + ((parseFloat(item.pricePerDay) || 0) * (parseFloat(item.numOfDays) || 0)), 
                0
            ),
            bellman: form.multiplicationBellman.reduce(
                (sum, item) => sum + ((parseFloat(item.pricePerDay) || 0) * (parseFloat(item.numOfDays) || 0)), 
                0
            ),
            gratuities: form.multiplicationGratuities.reduce(
                (sum, item) => sum + ((parseFloat(item.pricePerDay) || 0) * (parseFloat(item.numOfDays) || 0)), 
                0
            ),
            checkHeadsets: form.checkHeadsets,
            checkBellman: form.checkBellman,
            checkGratuities: form.checkGratuities,
        }));

        setCheckedExtras(updatedCheckedExtras);
    }, [extrasFormData]);

    const [transportationFormData, setTransportationFormData] = useLocalStorage("transportationformdata", [
        {
            priceOfVehicleContainer: [{typeOfVehicle:"", priceOfVehicle:""}],
            driverLandExpensesContainer:  [{driverLandExpenses: ""}],
            multiplicationDriverMeals:[{pricePerDay:"", numOfDays:""}],
            multiplicationDriverAccommodation:[{pricePerDay:"", numOfDays:""}],
            checkButtonContainer: [{checkButton: ""}],
        }
    ])

    const [checkedTransportation, setCheckedTransportation] = useLocalStorage("checkedtransportation", []);

    useEffect(() => {
        const hotelExpensesTotalPerDriver = hotelFormData.reduce((sum, hotel) => { // Calculate the driver expenses (once per form)
            const applyDriverExpenses = hotel.driverSelectorContainer?.[0]?.driverSelector === "Yes";
            if (applyDriverExpenses) {
                const roomPrice = parseFloat(hotel.hotelPriceContainer[0]?.hotelPrice || 0);
                const singleSupplement = parseFloat(hotel.singleSupplementContainer[0]?.singleSupplement || 0);
                const dinnerPrice = parseFloat(hotel.dinnerPriceContainer[0]?.dinnerPrice || 0);
                const lunchPrice = parseFloat(hotel.lunchPriceContainer[0]?.lunchPrice || 0);
                return sum + roomPrice + singleSupplement + dinnerPrice + lunchPrice;
            }
            return sum;
        }, 0);

        const selected = transportationFormData // Calculate the trasnportation price per form
            .filter(form => form.checkButtonContainer?.[0]?.checkButton) // Only the checked forms
            .map(form => {
                const typeOfVehicle = form.priceOfVehicleContainer[0]?.typeOfVehicle || "";

                const transportationPerTier = Object.values(numOfPaxData[0]).map(tier => { // Price per tier
                    const numOfPax = Number(tier.numOfPax) || 1;
                    const free = Number(tier.free) || 0;

                    const vehiclePrice = parseFloat(form.priceOfVehicleContainer[0]?.priceOfVehicle || 0);
                    const landPrice = parseFloat(form.driverLandExpensesContainer[0]?.driverLandExpenses || 0);
                    const mealsPrice = form.multiplicationDriverMeals.reduce(
                        (sum, item) => sum + (parseFloat(item.pricePerDay) || 0) * (parseFloat(item.numOfDays) || 0),
                        0
                    );
                    const accPrice = form.multiplicationDriverAccommodation.reduce(
                        (sum, item) => sum + (parseFloat(item.pricePerDay) || 0) * (parseFloat(item.numOfDays) || 0),
                        0
                    );

                    const totalForm = vehiclePrice + landPrice + mealsPrice + accPrice + hotelExpensesTotalPerDriver; // Sum everything per form

                    const totalPerPayingPax = Math.round(totalForm / numOfPax * (1 + free / numOfPax)); // // Price per person

                    return totalPerPayingPax;
                });

                return { typeOfVehicle, transportationPerTier };
            });

        setCheckedTransportation(selected);
    }, [transportationFormData, hotelFormData, numOfPaxData]);

    const [tourGuideFormData, setTourGuideFormData] = useLocalStorage("tourguideformdata", [ 
        {   
            multiplicationPrice: [{ pricePerDay: "", numOfDays: "" }],
            guideLandExpensesContainer: [{guideLandExpenses: ""}],
            multiplicationMeals: [{ pricePerDay: "", numOfDays: "" }],
            multiplicationAccommodation: [{ pricePerDay: "", numOfDays: "" }],
            checkButtonContainer: [{checkButtonContainer: false}],
         } 
    ])
    const [checkedTourGuide, setCheckedTourGuide] = useLocalStorage("checkedtourguide", []);

    useEffect(() => {

        const hotelExpensesTotalPerGuide = hotelFormData.reduce((sum, hotel) => {
            const applyGuideExpenses =
                hotel.guideSelectorContainer?.[0]?.guideSelector === "Yes";

            if (applyGuideExpenses) {
                const room = parseFloat(hotel.hotelPriceContainer[0]?.hotelPrice || 0);
                const single = parseFloat(hotel.singleSupplementContainer[0]?.singleSupplement || 0);
                const dinner = parseFloat(hotel.dinnerPriceContainer[0]?.dinnerPrice || 0);
                const lunch = parseFloat(hotel.lunchPriceContainer[0]?.lunchPrice || 0);

                return sum + room + single + dinner + lunch;
            }
            return sum;
        }, 0);

        const selected = tourGuideFormData
            .filter(form => form.checkButtonContainer?.[0]?.checkButton)
            .map(form => {

                const tourGuidePerTier = Object.values(numOfPaxData[0]).map(tier => {
                    const numOfPax = Number(tier.numOfPax) || 1;
                    const free = Number(tier.free) || 0;

                    const guidePrice = form.multiplicationPrice.reduce(
                        (sum, item) =>
                            sum +
                            (parseFloat(item.pricePerDay) || 0) *
                            (parseFloat(item.numOfDays) || 0),
                        0
                    );

                    const landPrice = parseFloat(
                        form.guideLandExpensesContainer?.[0]?.guideLandExpenses || 0
                    );

                    const mealsPrice = form.multiplicationMeals.reduce(
                        (sum, item) =>
                            sum +
                            (parseFloat(item.pricePerDay) || 0) *
                            (parseFloat(item.numOfDays) || 0),
                            0
                    );

                    const accPrice = form.multiplicationAccommodation.reduce(
                        (sum, item) =>
                            sum +
                            (parseFloat(item.pricePerDay) || 0) * 
                            (parseFloat(item.numOfDays) || 0),
                            0
                    );

                    const totalForm =
                        guidePrice +
                        landPrice +
                        mealsPrice +
                        accPrice +
                        hotelExpensesTotalPerGuide;

                    const totalPerPayingPax =
                        Math.round((totalForm / numOfPax) * (1 + free / numOfPax));

                    return totalPerPayingPax;
                });

                return { tourGuidePerTier };
            });

        setCheckedTourGuide(selected);
    }, [tourGuideFormData, hotelFormData, numOfPaxData]);

    const roomTypeOptions = [
        { value: "double/twin", label: "double/twin" },
        { value: "single room", label: "single room" }
    ];

    const [selectRoomType, setSelectRoomType] = useLocalStorage(
        "selectroomtype",
        roomTypeOptions[0]
    );

    return (
        <CounterContext.Provider value={{
            numOfPaxData, setNumOfPaxData,
            hotelFormData, setHotelFormData,
            localGuidesFormData, setLocalGuidesFormData,
            activitiesFormData, setActivitiesFormData,
            formHeaderValues, setFormHeaderValues,
            finalRrpPerTier, setFinalRrpPerTier,
            singleSupplementTotal, setSingleSupplementTotal,
            hotelInclusions, setHotelInclusions,
            hotelInclusionsExtras, setHotelInclusionsExtras,
            servicesInclusions, setServicesInclusions,
            generalTerms, setGeneralTerms,
            globalItineraries, setGlobalItineraries,
            includeOptions, setIncludeOptions,
            checkButton, setCheckButton,
            checkedActivities, setCheckedActivities,
            checkedLocalGuides, setCheckedLocalGuides,
            flightTrainFormData, setFlightTrainFormData,
            checkedFlightTrain, setCheckedFlightTrain,
            extrasFormData, setExtrasFormData,
            checkedExtras, setCheckedExtras,
            transportationFormData, setTransportationFormData,
            checkedTransportation, setCheckedTransportation,
            tourGuideFormData, setTourGuideFormData,
            checkedTourGuide, setCheckedTourGuide,
            selectRoomType, setSelectRoomType,
            roomTypeOptions
        }}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider