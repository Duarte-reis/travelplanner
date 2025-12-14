import "../../index.css";
import TextBox from "../TextBox";
import Selector from "../Selector";
import Multiplication from "../Multiplication";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

function HotelInclusionsExtras() {

    const { hotelInclusionsExtras, setHotelInclusionsExtras } = useContext(CounterContext);

    const cityTax = [
    { value: "", label: "City Tax", disabled: true },
    { value: "City Tax: Yes", label: "City Tax: Yes" },
    { value: "City Tax: No", label: "City Tax: No" },
    ];

    const mealPlan = [
    { value: "", label: "Meal Plan", disabled: true },
    { value: "Meal Plan: RO", label: "Meal Plan: RO" },
    { value: "Meal Plan: BB", label: "Meal Plan: BB" },
    { value: "Meal Plan: HB", label: "Meal Plan: HB" },
    { value: "Meal Plan: FB", label: "Meal Plan: FB" },
    ];

    const beverages = [
    { value: "", label: "Beverages", disabled: true },
    { value: "Beverages: Yes", label: "Beverages: Yes" },
    { value: "Beverages: No", label: "Beverages: No" },
    ];

    const bellman = [
    { value: "", label: "Bellman", disabled: true },
    { value: "Bellman: Yes", label: "Bellman: Yes" },
    { value: "Bellman: No", label: "Bellman: No" },
    ];

    const supplementOptions = [
    { value: "", label: "Supplement" },
    { value: "Supplement: BB", label: "Supplement: BB" },
    { value: "Supplement: HB", label: "Supplement: HB" },
    { value: "Supplement: FB", label: "Supplement: FB" },
    ];

    const mealPlanAutoText = {
        "Meal Plan: RO": "Room only",
        "Meal Plan: BB": "Breakfast included",
        "Meal Plan: HB": "Breakfast and dinner included",
        "Meal Plan: FB": "Meals as described in the itinerary"
    };

    const beveragesAutoText = {
        "Beverages: Yes": "Wine and water",
        "Beverages: No": ""
    }

    const bellmanAutoText = {
        "Bellman: Yes": "1 bag per person",
        "Bellman: No": ""
    }

    const supplementAutoText = {
        "Supplement: BB": "Breakfast",
        "Supplement: HB": "Half-board",
        "Supplement: FB": "Full-board (from breakfast on first day to lunch on last day)"
    };

    return (
        <div className="hotel_extras_container">
            <div className="city_tax_meal_plan_wrapper">
                <div className="hotel_extras_city_tax">
                    <Selector
                        options={cityTax}
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
                    <Selector
                        options={mealPlan}
                        value={hotelInclusionsExtras.mealPlan?.mealPlanSelector || ""}
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
                        value={hotelInclusionsExtras.mealPlan?.mealPlanText || ""}
                        onChange={(value) =>
                            setHotelInclusionsExtras ({
                                ...hotelInclusionsExtras, mealPlan: {
                                    ...hotelInclusionsExtras.mealPlan,
                                    mealPlanText: mealPlanAutoText[value]
                                }
                            })
                        }
                    />
                </div>
            </div>

            <div className="beverages_bellman_wrapper">
                <div className="hotel_extras_beverages">
                        <Selector
                            options={beverages}
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
                    <Selector
                    options={bellman}
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
                <Selector
                    options={supplementOptions}
                    defaultValue=""
                    className="supplement_options_selector"
                    value={hotelInclusionsExtras.supplement.supplementSelector}
                    onChange={(value) =>
                    setHotelInclusionsExtras({
                        ...hotelInclusionsExtras,
                        supplement: {
                            ...hotelInclusionsExtras.supplement,
                            supplementSelector: value,
                            supplementText: supplementAutoText[value] || ""
                        }
                    })
                    }
                />

                <Multiplication
                    data={hotelInclusionsExtras.supplement.multiplication}
                    updateMultiplicationData={(field, value) => {
                        const updatedMultiplication = {
                            ...hotelInclusionsExtras.supplement.multiplication,
                            [field]: value
                        };

                        const price = Number(updatedMultiplication.pricePerDay) || 0;
                        const days = Number(updatedMultiplication.numOfDays) || 0;
                        const total = price * days;

                        setHotelInclusionsExtras({
                            ...hotelInclusionsExtras,
                            supplement: {
                                ...hotelInclusionsExtras.supplement,
                                multiplication: updatedMultiplication,
                                supplementTotal: total
                            }
                        });
                    }}
                />

                <TextBox
                    value={hotelInclusionsExtras.supplement.supplementText}
                    onChange={(value) =>
                    setHotelInclusionsExtras({
                        ...hotelInclusionsExtras,
                        supplement: {
                        ...hotelInclusionsExtras.supplement,
                        supplementText: value
                        }
                    })
                    }
                />
                </div>

        </div>
        );
    }

export default HotelInclusionsExtras;
