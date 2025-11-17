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


function FormComplete() {
    return (
        <section id="form_complete">
            <div className="hotel_form_complete">
                <Bar 
                    barContent= {["Day", "City", "Hotel", "Single", "Meal", "Dinner", "Lunch", "Guide/Driver"]}
                />
                <HotelForm />
                <HotelForm />
                <HotelForm />
                <HotelForm />
                <HotelForm />
                <HotelForm />
                <HotelForm />
                <HotelForm />
                <HotelForm />
            </div>
            
            <div className="local_guides_tour_guide_container_form_complete"> 
                <div className="local_guides_form_complete">
                    <Bar 
                        barContent = {["Local Guides"]}
                    />
                    <Bar 
                        barContent= {["Type of service", "15pax", "20pax", "25pax", "30pax", "35pax", "40pax", "45pax", "Opt"]}
                    />
                    <LocalGuidesForm />
                    <LocalGuidesForm />
                    <LocalGuidesForm />
                    <LocalGuidesForm />
                    <LocalGuidesForm />
                </div>    
                <div className="tour_guide_form_complete">
                    <Bar 
                        barContent = {["Guide"]}
                    />
                    <TourGuideForm />
                    <TourGuideForm />
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
                    <ActivitiesForm />
                    <ActivitiesForm />
                    <ActivitiesForm />
                    <ActivitiesForm />
                    <ActivitiesForm />
                </div> 
                <div className="transportation_form_complete">
                    <Bar 
                        barContent = {["Transportation"]}
                    />
                    <TransportationForm />
                    <TransportationForm />
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
                    barContent = {["Type", "Company", "Route", "Fare", "Tax", "Guide", "Opt."]}
                />
                <FlightTrainForm />
                <FlightTrainForm />
                <FlightTrainForm />
                <FlightTrainForm />
                <FlightTrainForm />
            </div> 

            <div className="price_tiers_form_complete">
                <div className="pax_plus_free_container">
                    <Bar 
                        barContent = {["Pax + free"]}
                    />    
                    <div className="pax_plus_free_content">
                        <PaxTiers />
                        <PaxTiers />
                        <PaxTiers />
                        <PaxTiers />
                        <PaxTiers />
                        <PaxTiers />
                        <PaxTiers />
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




