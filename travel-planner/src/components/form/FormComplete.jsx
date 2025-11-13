import "../../index.css"
import HotelForm from "./HotelForm"
import HotelFormBar from "./HotelFormBar"
import LocalGuidesForm from "./LocalGuidesForm"
import LocalGuidesFormBar from "./LocalGuidesFormBar"
import TourGuideForm from "./TourGuideForm"
import TourGuideFormBar from "./TourGuideFormBar"
import TourGuideExpensesForm from "./TourGuideExpensesForm"
import TourGuideExpensesFormBar from "./TourGuideExpensesFormBar"
import ActivitiesForm from "./ActivitiesForm"
import ActivitiesFormBar from "./ActivitiesFormBar"
import TransportationForm from "./TransportationForm"
import TransportationFormBar from "./TransportationFormBar"
import DriverExpensesForm from "./DriverExpensesForm"
import DriverExpensesFormBar from "./DriverExpensesFormBar"
import FlightTrainForm from "./FlightTrainForm"
import FlightTrainFormBar from "./FlightTrainFormBar"
import ExtrasForm from "./ExtrasForm"
import PriceTiersFormSmallScreen from "./PriceTiersFormSmallScreen"

function FormComplete() {
    return (
        <section id="form_complete">
            <div className="hotel_form_complete">
                <HotelFormBar />
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
                    <LocalGuidesFormBar />
                    <LocalGuidesForm />
                    <LocalGuidesForm />
                    <LocalGuidesForm />
                    <LocalGuidesForm />
                    <LocalGuidesForm />
                </div>    
                <div className="tour_guide_form_complete">
                    <TourGuideFormBar />
                    <TourGuideForm />
                    <TourGuideForm />
                    <div className="tour_guide_expenses_form_complete">
                        <TourGuideExpensesFormBar />
                        <TourGuideExpensesForm />
                    </div>
                </div>
            </div>

            <div className="activities_transportation_form_complete">
                <div className="activities_form_complete">
                    <ActivitiesFormBar />
                    <ActivitiesForm />
                    <ActivitiesForm />
                    <ActivitiesForm />
                    <ActivitiesForm />
                    <ActivitiesForm />
                    
                </div> 
                <div className="transportation_form_complete">
                    <TransportationFormBar />
                    <TransportationForm />
                    <TransportationForm />
                    <div className="driver_expenses_form_complete">
                        <DriverExpensesFormBar />
                        <DriverExpensesForm />
                    </div>
                </div>
            </div>

            <div className="flight_train_extras_form_complete">
                <div className="flight_train_form_complete">
                    <FlightTrainFormBar />
                    <FlightTrainForm />
                    <FlightTrainForm />
                    <FlightTrainForm />
                    <FlightTrainForm />
                    <FlightTrainForm />
                </div> 
                <div className="extras_form_complete">
                    <ExtrasForm />
                </div>
            </div>

            <div className="price_tiers_form_complete">
                <PriceTiersFormSmallScreen />
            </div>      
        </section>
    )
}

export default FormComplete