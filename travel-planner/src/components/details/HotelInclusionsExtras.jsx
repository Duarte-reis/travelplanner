import "../../index.css";
import TextBox from "../TextBox";
import Selector from "../Selector";
import Multiplication from "../Multiplication";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

function HotelInclusionsExtras() {

    const { hotelInclusions, setHotelInclusions } = useContext(CounterContext);

    const { hotelInclusionsExtras, setHotelInclusionsExtras } = useContext(CounterContext);

    const mealPlan = [
    { value: "", label: "" },
    { value: "RO", label: "RO" },
    { value: "BB", label: "BB" },
    { value: "HB", label: "HB" },
    { value: "FB", label: "FB" },
    ];

    const supplementOptions = [
    { value: "", label: "" },
    { value: "BB", label: "BB" },
    { value: "HB", label: "HB" },
    { value: "FB", label: "FB" },
    ];

    const mealPlanAutoText = {
        RO: "Room only",
        BB: "Breakfast included",
        HB: "Breakfast and dinner included",
        FB: "Meals as described in the itinerary"
    };

    const beveragesAutoText = {
        Yes: "Wine and water",
        No: ""
    }

    const bellmanAutoText = {
        Yes: "1 bag per person",
        No: ""
    }

    const supplementAutoText = {
        BB: "Breakfast",
        HB: "Half-board",
        FB: "Full-board (from breakfast on first day to lunch on last day)"
    };

    return (
        <div className="hotel_extras_container">
            <div className="city_tax_meal_plan_wrapper">
                <div className="hotel_extras_city_tax">
                <p>City Tax</p>
                <Selector
                    value={hotelInclusionsExtras.cityTax || ""}
                    onChange={(value) =>
                    setHotelInclusionsExtras({
                        ...hotelInclusionsExtras,
                        cityTax: value
                    })
                    }
                />
            </div>
            
            <div className="hotel_extras_meal_plan">
                <p>Meal Plan</p>
                <Selector
                    options={mealPlan}
                    value={hotelInclusionsExtras.mealPlan?.mealPlanSelector}
                    onChange={(value) => {
                        setHotelInclusionsExtras({
                            ...hotelInclusionsExtras, mealPlan: {
                                ...hotelInclusionsExtras.mealPlan, 
                                mealPlanSelector: value,
                                mealPlanText: mealPlanAutoText[value]
                            }
                        });
                    }}
                />
                <TextBox
                    value={hotelInclusionsExtras.mealPlan?.mealPlanText}
                    onChange={(value) =>
                        setHotelInclusionsExtras ({
                            ...hotelInclusionsExtras, mealPlan: {
                                ...hotelInclusionsExtras.mealPlan,
                                mealPlanText: value
                            }
                        })
                    }
                />
            </div>
        </div>

            <div className="beverages_bellman_wrapper">
                <div className="hotel_extras_beverages">
                    <p>Beverages</p>
                        <Selector
                            value={hotelInclusionsExtras.beverages?.beveragesSelector}
                            onChange={(value) =>
                                setHotelInclusionsExtras({
                                    ...hotelInclusionsExtras, beverages: {
                                        ...hotelInclusionsExtras.beverages,
                                        beveragesSelector: value,
                                        beveragesText: beveragesAutoText[value]
                                    }
                                })
                            }
                        />
                        <TextBox 
                            value={hotelInclusionsExtras.beverages?.beveragesText}
                            onChange={(value) =>
                                setHotelInclusionsExtras ({
                                    ...hotelInclusionsExtras, beverages: {
                                        ...hotelInclusionsExtras.beverages,
                                        beveragesText: value
                                    }
                                })
                            }
                        />
                </div>
            <div className="hotel_extras_bellman">
                <p>Bellman</p>
                    <Selector
                        value={hotelInclusionsExtras.bellman?.bellmanSelector}
                        onChange={(value) =>
                        setHotelInclusionsExtras ({
                            ...hotelInclusionsExtras, bellman: {
                                ...hotelInclusionsExtras.bellman,
                                bellmanSelector: value,
                                bellmanText: bellmanAutoText[value]
                            }
                        })
                    }
                    />
                    <TextBox
                        value={hotelInclusionsExtras.bellman?.bellmanText}
                        onChange={(value) =>
                            setHotelInclusionsExtras({
                                ...hotelInclusionsExtras, bellman: {
                                        ...hotelInclusionsExtras.bellman,
                                        bellmanText: value
                                    }
                            })
                        }
                    />
                </div>
            </div>

            <div className="hotel_extras_supplement">
                <p>Supplement</p>
                <Selector
                    options={supplementOptions}
                    defaultValue=""
                    className="supplement_options_selector"
                    value={hotelInclusionsExtras.supplement?.supplementSelector}
                    onChange={(value) =>
                        setHotelInclusionsExtras({
                            ...hotelInclusionsExtras,
                                supplement: { 
                                    supplementSelector: value,
                                    supplementText: supplementAutoText[value]
                                }
                        })
                    }
                    />
                <Multiplication
                    data={hotelInclusionsExtras.supplement?.multiplication}
                        updateMultiplicationData={(field, value) => {
                            setHotelInclusionsExtras({
                                ...hotelInclusionsExtras,
                                supplement: {
                                    ...hotelInclusionsExtras.supplement, multiplication: {
                                        ...hotelInclusionsExtras.supplement.multiplication, [field]: value
                                    }
                                }
                            });
                    }}
                />
                <TextBox 
                    value={hotelInclusionsExtras.supplement?.supplementText}
                    onChange={(value) =>
                        setHotelInclusionsExtras ({
                            ...hotelInclusionsExtras, supplement: {
                                ...hotelInclusionsExtras.supplement, supplementText: value
                            }
                        })
                    }
                />
            </div>
        </div>
        );
    }

export default HotelInclusionsExtras;
