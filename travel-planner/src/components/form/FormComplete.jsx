import "../../index.css"
import HotelForm from "./HotelForm"
import LocalGuidesForm from "./LocalGuidesForm"
import TourGuideForm from "./TourGuideForm"
import TourGuideExpensesForm from "./TourGuideExpensesForm"
import ActivitiesForm from "./ActivitiesForm"
import TransportationForm from "./TransportationForm"
import DriverExpensesForm from "./DriverExpensesForm"
import FlightTrainForm from "./FlightTrainForm"
import ExtrasForm from "./ExtrasForm"
import Bar from "../Bar"
import PaxTiers from "./PaxTiers"
import FreeButton from "../FreeButton"
import TextBox from "../TextBox"
import MarginTextBox from "../MarginTextBox"
import AddNewElementBtn from "../AddNewElementBtn"
import {useLocalStorage} from "../../hooks/useLocalStorage"

function FormComplete({onChange}) {

    /* ---- Update Text Box value - Hotel Form --- */
    
    const [hotelFormData, setHotelFormData] = useLocalStorage("hotelformdata", [
        {   
            city: "",
            hotel: "",
            hotelPrice: "",
            singleSupplement:"",
            dinner:"",
            dinnerPrice:"",
            lunch:"",
            lunchPrice:"",
        }    
    ]);

    const addHotelForm = () => {
        setHotelFormData([
            ...hotelFormData,
            {
                city: "",
                hotel: "",
                hotelPrice: "",
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
        {
            multiplicationData: [{pricePerDay:"", numOfDays:""}]
        }
    ])

    const addTourGuideForm = () => {
        setTourGuideFormData([
            ...tourGuideFormData,
            {
                multiplicationData: [{pricePerDay:"", numOfDays:""}]
            }
        ])
    }

    const updateMultiplicationData = (formIndex, key, index, value) => {
        const updated = [...tourGuideFormData];
        updated[formIndex] = {
            ...updated[formIndex],
            multiplicationData: updated[formIndex].multiplicationData.map((line, i) =>
                i === index ? { ...line, [key]: value } : line
            )
        };
        setTourGuideFormData(updated);
    };

    /* ---- Update Text Box value - Activities Form --- */
    
    const [activitiesFormData, setActivitiesFormData] = useLocalStorage("activitiesformdata", [
        {
            country:"",
            nameOfActivity:"",
            pricePerPerson:"",
        }
    ])

    const addActivityForm = () => {
        setActivitiesFormData([
            ...activitiesFormData,
            {
                country:"",
                nameOfActivity:"",
                pricePerPerson:"",
            }
        ])
    }

    /* ---- Update Text Box value - Transportation Form --- */

    const [transportationFormData, setTransportationFormData] = useLocalStorage("transportationformdata", [
        {
            typeOfVehicle:"",
            priceOfVehicle:"",
        }
    ])

    const addTransportationData = () =>
        setTransportationFormData([
            ...transportationFormData,
            {
                typeOfVehicle: "",
                priceOfVehicle: "",   
            }
        ])

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

    /* ---- Add Hotel Form values and show in Price per Pax ---- */

    const [hotelTotal, setHotelTotal] = useLocalStorage("hotelTotal", 0);

    const updateHotelTotal = (total) => {
        setHotelTotal(total);
    };

    return (
        <section id="form_complete">
            <div className="hotel_form_complete">
                <Bar 
                    barContent= {["Day", "City", "Hotel", "Single", "Meal", "Dinner", "Lunch", "Guide/Driver"]}
                />
                
                {hotelFormData.map((value, index) => (
                    <HotelForm
                        key={index}
                        index={index}
                        hotelFormData={hotelFormData}
                        setHotelFormData={setHotelFormData}
                        sendTotalToPricePerPax={updateHotelTotal}
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
                    <Bar 
                        barContent = {["Guide"]}
                    />
                    {tourGuideFormData.map((form, formIndex) => (
                        <TourGuideForm 
                            key={formIndex}
                            formIndex={formIndex}
                            multiplicationData={form.multiplicationData}
                            updateMultiplicationData={updateMultiplicationData}
                        />
                    ))}

                    <AddNewElementBtn 
                        onAdd={addTourGuideForm}
                        text="Add another line"
                    />
                    <div className="tour_guide_expenses_form_complete">
                        <Bar 
                            barContent = {["Guide Expenses"]}
                        />
                        <TourGuideExpensesForm />
                    </div>
                </div>
            </div>

            <div className="activities_transportation_form_complete">
                <div className="activities_form_complete">
                    <Bar 
                        barContent = {["Activities"]}
                    />
                    {activitiesFormData.map((value, index) => (
                        <ActivitiesForm 
                            key={index}
                            index={index}
                            activitiesFormData={activitiesFormData}
                            setActivitiesFormData={setActivitiesFormData}
                        />
                    ))}
                    <AddNewElementBtn
                        onAdd={addActivityForm}
                        text="Add another line"
                    />
                </div> 
                <div className="transportation_form_complete">
                    <Bar 
                        barContent = {["Transportation"]}
                    />
                    {transportationFormData.map((value, index) => (
                        <TransportationForm 
                            key={index}
                            index={index}
                            transportationFormData={transportationFormData}
                            setTransportationFormData={setTransportationFormData}
                        />
                    ))}
                    <AddNewElementBtn 
                        onAdd={addTransportationData}
                        text="Add another line"
                    />
                    <div className="driver_expenses_form_complete">
                        <Bar 
                            barContent = {["Driver Expenses"]}
                        />
                        <DriverExpensesForm />
                    </div>
                </div>

                <div className="extras_form_complete">
                    <ExtrasForm />
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
                        <TextBox />
                        <TextBox />
                        <TextBox />
                        <TextBox />
                        <TextBox />
                        <TextBox />
                        <TextBox />
                    </div>
                </div>

                <div className="profit_margin_container">
                    <Bar 
                        barContent = {["Margin"]}
                    />    
                    <div className="margin_comission_content">
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
                    <div className="margin_comission_content">
                        <MarginTextBox />
                        <MarginTextBox />
                        <MarginTextBox />
                        <MarginTextBox />
                        <MarginTextBox />
                        <MarginTextBox />
                        <MarginTextBox />
                    </div>
                </div>    

                <div className="price_per_pax_container">
                    <Bar 
                        barContent = {["Price"]}
                    />    
                    <div className="price_per_pax_content">
                        <TextBox 
                            value={hotelTotal + "€"}
                            readOnly
                        />
                        <TextBox 
                            value={hotelTotal + "€"}
                            readOnly
                        />
                        <TextBox 
                            value={hotelTotal + "€"}
                            readOnly
                        />
                        <TextBox 
                            value={hotelTotal + "€"}
                            readOnly
                        />
                        <TextBox 
                            value={hotelTotal + "€"}
                            readOnly
                        />
                        <TextBox 
                            value={hotelTotal + "€"}
                            readOnly
                        />
                        <TextBox 
                            value={hotelTotal + "€"}
                            readOnly
                        />
                    </div>
                </div>
            </div>          
        </section>
    )
}

export default FormComplete




