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
import MarginTextBox from "../MarginTextBox"
import AddNewElementBtn from "../AddNewElementBtn"
import ComissionTextBox from "../ComissionTextBox"
import {useLocalStorage} from "../../hooks/useLocalStorage"

function FormComplete() {

    /* ---- Update Num of Pax in Pax Tiers ---- */

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
    ])
    
    /* ---- Update Text Box value - Hotel Form --- */
    
    const [hotelFormData, setHotelFormData] = useLocalStorage("hotelformdata", [
        {   
            city:"", 
            hotel:"", 
            hotelPrice:"",
            singleSupplement:"",
            dinner:"",
            dinnerPrice:"",
            lunch:"",
            lunchPrice:"",
        }    
    ]);

    const updateHotelFormData = (formIndex, key, value) => {
        const updated = [...hotelFormData];
        updated[formIndex] = {...updated[formIndex], [key]: value};
        setHotelFormData(updated);
    };

    const addHotelForm = () => {
        setHotelFormData([
            ...hotelFormData,
            {
                city:"", 
                hotel:"", 
                hotelPrice:"",
                singleSupplement:"",
                dinner:"",
                dinnerPrice:"",
                lunch:"",
                lunchPrice:"",
            }
        ])
    }

    /* ---- Update Text Box value - Local Guides Form --- */

    const [localGuidesFormData, setLocalGuidesFormData] = useLocalStorage("localguidesformdata", [
        {
            country: "",
            service:"",
            price1:"",
            price2:"",
            price3:"",
            price4:"",
            price5:"",
            price6:"",
            price7:"",
        }
    ])

    const addLocalGuidesForm = () => {
        setLocalGuidesFormData([
            ...localGuidesFormData,
            {
                country: "",
                service:"",
                price1:"",
                price2:"",
                price3:"",
                price4:"",
                price5:"",
                price6:"",
                price7:"",
            }
        ])
    }

    /* ---- Update Text Box value - Tour Guides Form --- */

    const [tourGuideFormData, setTourGuideFormData] = useLocalStorage("tourguideformdata", [ 
        {   multiplicationPrice: [{ pricePerDay: "", numOfDays: "" }],
            multiplicationMeals: [{ pricePerDay: "", numOfDays: "" }],
            multiplicationAccommodation: [{ pricePerDay: "", numOfDays: "" }], } 
    ])

    const updateMultiplicationData = (formIndex, section, key, index, value) => {
        const updated = [...tourGuideFormData];
        updated[formIndex] = {...updated[formIndex], [section]: updated[formIndex][section].map ((line, i) => i === index ? { ...line, [key]: value } : line)};
            setTourGuideFormData(updated);
    };

    const addTourGuideForm = () => {
    setTourGuideFormData([
      ...tourGuideFormData,
      {
        multiplicationPrice: [{ pricePerDay: "", numOfDays: "" }],
        multiplicationMeals: [{ pricePerDay: "", numOfDays: "" }],
        multiplicationAccommodation: [{ pricePerDay: "", numOfDays: "" }]
      }
    ]);
  };

    /* ---- Update Text Box value - Activities Form --- */
    
    const [activitiesFormData, setActivitiesFormData] = useLocalStorage("activitiesformdata", [
        {
            countryContainer: [{ country: "" }],
            nameOfActivityContainer: [{ nameOfActivity: "" }],
            pricePerPersonContainer: [{ pricePerPerson: "" }]
        }
    ])

    const updateActivityField = (formIndex, section, key, index, value) => {
        const updated = [...activitiesFormData];
        updated[formIndex] = {
            ...updated[formIndex],
            [section]: updated[formIndex][section].map((item, i) =>
            i === index ? { ...item, [key]: value } : item
            ),
        };
        setActivitiesFormData(updated); // atualiza o estado
        };

    const addActivityForm = () => {
        setActivitiesFormData([
            ...activitiesFormData,
            {
                countryContainer:[{country:""}],
                nameOfActivityContainer:[{nameOfActivity:""}],
                pricePerPersonContainer:[{pricePerPerson:""}]
            }
        ])
    }

    /* ---- Update Text Box value - Transportation Form --- */

    const [transportationFormData, setTransportationFormData] = useLocalStorage("transportationformdata", [
        {
            priceOfVehicleContainer: [{typeOfVehicle:"", priceOfVehicle:""}],
            multiplicationDriverMeals:[{pricePerDay:"", numOfDays:""}],
            multiplicationDriverAccommodation:[{pricePerDay:"", numOfDays:""}]
        }
    ])

    const updateTransportationData = (formIndex, section, key, index, value) => {
        const updated = [...transportationFormData];
        updated[formIndex] = {...updated[formIndex], [section]: updated[formIndex][section].map ((line, i) => i === index ? { ...line, [key]: value } : line)};
            setTransportationFormData(updated);
    };

    const addTransportationForm = () => {
        setTransportationFormData ([
            ...transportationFormData,
            {
                priceOfVehicleContainer: [{typeOfVehicle:"", priceOfVehicle:""}],
                multiplicationDriverMeals:[{pricePerDay:"", numOfDays:""}],
                multiplicationDriverAccommodation:[{pricePerDay:"", numOfDays:""}]
            }
        ])
    }

    /* ---- Update Text Box value - Flight/Train Form --- */
    
    const [extrasFormData, setExtrasFormData] = useLocalStorage("extrasformdata", [
        {
            multiplicationHeadsets:[{pricePerDay:"", numOfDays:""}],
            multiplicationBellman:[{pricePerDay:"", numOfDays:""}],
            multiplicationGratuities:[{pricePerDay:"", numOfDays:""}],
        }
    ])

    const updateExtrasMultiplicationData = (formIndex, section, key, index, value) => {
    const updated = [...extrasFormData];

    updated[formIndex] = {
      ...updated[formIndex],
      [section]: updated[formIndex][section].map((line, i) =>
        i === index ? { ...line, [key]: value } : line
      )
    };

    setExtrasFormData(updated);
  };
    
    /* ---- Update Text Box value - Flight/Train Form --- */
    
    const [flightTrainFormData, setFlightTrainFormData] = useLocalStorage("flighttrainformdata", [
        {
            company:"",
            route:"",
            fare:"",
            tax:"",
        }
    ]);

    const addFlightTrainFormData = () =>
        setFlightTrainFormData([
            ...flightTrainFormData,
            {
                company:"",
                route:"",
                fare:"",
                tax:"",
            }
        ]);

    /* ---- Add Hotel Form values and send it to NET ---- */

    const [hotelTotalForm, setHotelTotalForm] = useLocalStorage("hotelTotal", 0);

    const updateHotelTotal = (total) => {
        setHotelTotalForm(total);
    };

    /* ---- Add Flight/Train Form values and send it to NET ---- */

    const [flightTrainTotal, setFlightTrainTotal] = useLocalStorage("flighttraintotal", 0);

    const updateFlightTrainTotal = (total) => {
        setFlightTrainTotal(total);
    }

    /* ---- Add Headsets values and send it to NET ---- */

    const [extrasTotal, setExtrasTotal] = useLocalStorage("extrastotal", 0);

    const updateExtrasTotal = (totalExtras) => {
        setExtrasTotal(totalExtras);
    }
    
    /* ---- Tour Guide - calculate price per pax and send it to NET ---- */

    const sumTourGuideMultiplication = arr =>
    arr.reduce((sum, item) => {
        const price = parseFloat(item.pricePerDay) || 0;
        const days = parseFloat(item.numOfDays) || 0;
        return sum + price * days;
    }, 0)

    const tourGuideTotal = tourGuideFormData.reduce((sum, form) => {
        return sum 
            + sumTourGuideMultiplication(form.multiplicationPrice)
            + sumTourGuideMultiplication(form.multiplicationMeals)
            + sumTourGuideMultiplication(form.multiplicationAccommodation);
        }, 0);

    const tourGuidePerTier = Object.values(numOfPaxData[0]).map(tier => {
        const pax = parseInt(tier.numOfPax) || 1;
        return Math.floor(tourGuideTotal / pax);
    });

    /* ---- Transportation - calculate price per pax and send it to NET ---- */
    
    const sumTransportationFormData = arr =>
        arr.reduce((sum, item) => {
            const vehiclePrice = parseFloat(item.priceOfVehicle) || 0;
            const expensesPrice = parseFloat(item.pricePerDay) || 0;
            const expensesDays = parseFloat(item.numOfDays) || 0;
            return sum + vehiclePrice + expensesPrice * expensesDays;
        }, 0)

    const transportationTotal = transportationFormData.reduce((sum, form) => {
        return sum 
            + sumTransportationFormData(form.priceOfVehicleContainer)
            + sumTransportationFormData(form.multiplicationDriverMeals)
            + sumTransportationFormData(form.multiplicationDriverAccommodation);
        }, 0);

    const transportationPerTier = Object.values(numOfPaxData[0]).map(tier => {
        const pax = parseInt(tier.numOfPax) || 1;
        return Math.floor(transportationTotal / pax);
    });

    /* ---- Activity Form - send price per pax to NET ---- */

    

    return (
        <section id="form_complete">
            <div className="hotel_form_complete">
                <Bar 
                    barContent= {["Day", "City", "Hotel", "Single", "Meal", "Dinner", "Lunch", "Guide/Driver"]}
                />
                
                {hotelFormData.map((form, index) => (
                    <HotelForm
                        key={index}
                        formIndex={index}
                        data={form}
                        hotelFormData={hotelFormData}
                        updateHotelFormData={updateHotelFormData}
                        sendTotalToNet={updateHotelTotal}
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
                    <Bar 
                        barContent= {["Type of service", "15pax", "20pax", "25pax", "30pax", "35pax", "40pax", "45pax" ]}
                    />

                    {localGuidesFormData.map((value, index) => (
                        <LocalGuidesForm 
                            key={index}
                            index={index}
                            localGuidesFormData={localGuidesFormData}
                            setLocalGuidesFormData={setLocalGuidesFormData}
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
                            multiplicationMeals={form.multiplicationMeals}
                            multiplicationAccommodation={form.multiplicationAccommodation}
                            updateMultiplicationData={updateMultiplicationData}
                            addTourGuideForm={addTourGuideForm}
                            numOfPaxData={numOfPaxData}
                        />
                    ))}
                </div>
            </div>

            <div className="activities_transportation_form_complete">
                <div className="activities_form_complete">
                    <Bar 
                        barContent = {["Activities"]}
                    />
                    {activitiesFormData.map((form, index) => (
                        <ActivitiesForm 
                            key={index}
                            formIndex={index}
                            activitiesFormData={activitiesFormData}
                            setActivitiesFormData={setActivitiesFormData}
                            countryContainer={form.countryContainer}
                            nameOfActivityContainer={form.nameOfActivityContainer}
                            pricePerPersonContainer={form.pricePerPersonContainer}
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
                        />
                    ))}
                </div>

                <div className="extras_form_complete">
                    {extrasFormData.map((form, formIndex) => (
                        <ExtrasForm
                            key={formIndex}
                            formIndex={formIndex}
                            multiplicationHeadsets={form.multiplicationHeadsets}
                            multiplicationBellman={form.multiplicationBellman}
                            multiplicationGratuities={form.multiplicationGratuities}
                            updateExtrasMultiplicationData={updateExtrasMultiplicationData}
                            sendTotalToNet={updateExtrasTotal}
                        />
                    ))}
                </div>
            </div>

            <div className="flight_train_form_complete">
                <Bar 
                    barContent = {["Flight/Train"]}
                />
                <Bar 
                    barContent = {["Type", "Company", "Route", "Fare", "Tax", "Guide" ]}
                />
                {flightTrainFormData.map((value, index) => (
                    <FlightTrainForm 
                        key={index}
                        index={index}
                        flightTrainFormData={flightTrainFormData}
                        setFlightTrainFormData={setFlightTrainFormData}
                        sendTotalToNet={updateFlightTrainTotal}
                    />
                ))}
                
                <AddNewElementBtn 
                    onAdd={addFlightTrainFormData}
                    text="Add another line"
                />
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
                        <FreeButton />
                        <FreeButton />
                        <FreeButton />
                        <FreeButton />
                        <FreeButton />
                        <FreeButton />
                        <FreeButton />
                    </div>
                </div>

                <div className="total_net_container">
                    <Bar 
                        barContent = {["NET"]}
                    />    
                    <div className="total_net_content">
                        {Object.values(numOfPaxData[0]).map((tier, idx) => (
                            <TextBox
                                key={idx}
                                value={hotelTotalForm + flightTrainTotal + extrasTotal + tourGuidePerTier[idx] + transportationPerTier[idx] + "€"}
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
                        <MarginTextBox />
                        <MarginTextBox />
                        <MarginTextBox />
                        <MarginTextBox />
                        <MarginTextBox />
                        <MarginTextBox />
                        <MarginTextBox />
                    </div>
                </div>

                <div className="client_comission_container">
                    <Bar 
                        barContent = {["Comission"]}
                    />    
                    <div className="comission_content">
                        <ComissionTextBox />
                        <ComissionTextBox />
                        <ComissionTextBox />
                        <ComissionTextBox />
                        <ComissionTextBox />
                        <ComissionTextBox />
                        <ComissionTextBox />
                    </div>
                </div>    

                <div className="price_per_pax_container">
                    <Bar 
                        barContent = {["Price"]}
                    />    
                    <div className="price_per_pax_content">
                        <TextBox />
                        <TextBox />
                        <TextBox />
                        <TextBox />
                        <TextBox />
                        <TextBox />
                        <TextBox />
                    </div>
                </div>
            </div>          
        </section>
    )
}

export default FormComplete




