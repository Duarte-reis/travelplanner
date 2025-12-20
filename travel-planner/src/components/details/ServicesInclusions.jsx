import "../../index.css"
import TextBox from "../TextBox"
import TextArea from "../TextArea"
import Selector from "../Selector"
import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

function ServicesInclusions() {

    const { 
        localGuidesFormData, 
        activitiesFormData, 
        servicesInclusions, 
        setServicesInclusions, 
        checkedActivities,
        checkedLocalGuides,
    } = useContext(CounterContext)

    const transportation = [
        { value: "", label: "Transportation", disabled: true },
        { value: "Transportation: Yes", label: "Transportation: Yes" },
        { value: "Transportation: No", label: "Transportation: No" },
    ];

    const tourGuide = [
        { value: "", label: "Tour Guide", disabled: true },
        { value: "Tour Guide: Yes", label: "Tour Guide: Yes" },
        { value: "Tour Guide: No", label: "Tour Guide: No" },
    ];

    const flights = [
        { value: "", label: "Flights", disabled: true },
        { value: "Flights: Yes", label: "Flights: Yes" },
        { value: "Flights: No", label: "Flights: No" },
    ];

    const train = [
        { value: "", label: "Train", disabled: true },
        { value: "Train: Yes", label: "Train: Yes" },
        { value: "Train: No", label: "Train: No" },
    ];

    const localGuides = [
        { value: "", label: "Local Guides", disabled: true },
        { value: "Local Guides: Yes", label: "Local Guides: Yes" },
        { value: "Local Guides: No", label: "Local Guides: No" },
    ];

    const admissions = [
        { value: "", label: "Admissions", disabled: true },
        { value: "Admissions: Yes", label: "Admissions: Yes" },
        { value: "Admissions: No", label: "Admissions: No" },
    ];

    const headsets = [
        { value: "", label: "Headsets", disabled: true },
        { value: "Headsets: Yes", label: "Headsets: Yes" },
        { value: "Headsets: No", label: "Headsets: No" },
    ];

    const gratuities = [
        { value: "", label: "Gratuities", disabled: true },
        { value: "Gratuities: Yes", label: "Gratuities: Yes" },
        { value: "Gratuities: No", label: "Gratuities: No" },
    ];

    const freeDescription = [
        { value: "", label: "Free description", disabled: true },
        { value: "Free description in: double/twin", label: "Free description in: double/twin" },
        { value: "Free description in: single", label: "Free description in: single" },
        { value: "Free description: no", label: "Free description: no" },
    ];

    const childDiscount = [
        { value: "", label: "Child discount description", disabled: true },
        { value: "Child discount description: Yes", label: "Child discount description: Yes" },
        { value: "Child discount description: No", label: "Child discount description: No" },
    ];

    return (
        <section id="services_inclusions">
            <div className="transportation_tour_guide_line">
                <div className="transportation_inclusions">
                    <Selector
                        options={transportation} 
                        value={servicesInclusions.transportationInclusionsContainer?.transportationSelector || ""}
                            onChange={(value) =>
                                setServicesInclusions ({
                                    ...servicesInclusions,
                                            transportationInclusionsContainer: {
                                                transportationSelector: value,
                                                transportationText: value === "Transportation: Yes" ? "Tourist bus included for the entire tour, with driver expenses included." : ""
                                            }
                                })
                            }
                    />
                    <TextBox
                        value={servicesInclusions.transportationInclusionsContainer?.transportationText || ""}
                        onChange={(value) =>
                            setServicesInclusions({
                                ...servicesInclusions,
                                    transportationInclusionsContainer: {
                                        ...servicesInclusions.transportationInclusionsContainer,
                                        transportationText: value
                                    }
                                })
                            }
                    />
                </div>
                <div className="tour_guide_inclusions">
                    <Selector
                        options={tourGuide} 
                        value={servicesInclusions.guideInclusionsContainer?.guideSelector}
                        onChange={(value) =>
                            setServicesInclusions ({
                                ...servicesInclusions,
                                    guideInclusionsContainer: {
                                        guideSelector: value,
                                        guideText: value === "Tour Guide: Yes" ? "Tour Guide for the entire tour with expenses included" : ""
                                    }
                            })

                        }
                    />
                    <TextBox 
                        value = {servicesInclusions.guideInclusionsContainer?.guideText}
                        onChange={(value) =>
                            setServicesInclusions ({
                                ...servicesInclusions,
                                    guideInclusionsContainer: {
                                        ...servicesInclusions.guideInclusionsContainer, guideText: value
                                    }
                            })
                        }
                    />
                </div>
            </div>

            <div className="flights_train_line">
                <div className="flights_inclusions">
                    <Selector 
                        options={flights}
                        value={servicesInclusions.flightInclusionsContainer?.flightSelector}
                        onChange={(value) =>
                            setServicesInclusions ({
                                ...servicesInclusions,
                                    flightInclusionsContainer: {
                                        flightSelector: value,
                                        flightText: value === "Flights: Yes" ? "Flights included as mentioned in the itinerary" : ""
                                    }
                            })
                        }
                    />
                    <TextBox 
                        value={servicesInclusions.flightInclusionsContainer?.flightText}
                        onChange={(value) =>
                            setServicesInclusions ({
                                ...servicesInclusions,
                                flightInclusionsContainer: {
                                    ...servicesInclusions.flightInclusionsContainer,
                                        flightText: value
                                }
                            })
                        }
                    />
                </div>
                <div className="train_inclusions">
                    <Selector 
                        options={train}
                        value={servicesInclusions.trainInclusionsContainer?.trainSelector}
                        onChange={(value) =>
                            setServicesInclusions ({
                                ...servicesInclusions,
                                trainInclusionsContainer: {
                                    trainSelector: value,
                                    trainText: value === "Train: Yes" ? "Train included as mentioned in the itinerary" : ""
                                }
                            })
                        }
                    />
                    <TextBox 
                        value={servicesInclusions.trainInclusionsContainer?.trainText}
                        onChange={(value) =>
                            setServicesInclusions ({
                                ...servicesInclusions,
                                trainInclusionsContainer: {
                                    ...servicesInclusions.trainInclusionsContainer, trainText: value
                                }
                            })
                        }
                    />
                </div>
            </div>

            <div className="local_guides_line">
                <Selector
                    options={localGuides} 
                    value={servicesInclusions.localGuidesInclusionsContainer?.localGuidesSelector || ""}
                    onChange={(value) => {
                        const optionalGuides = checkedLocalGuides.map(guides => guides.serviceName);
                        const allLocalGuides = localGuidesFormData.map(
                            item => item.serviceNameContainer[0].serviceName
                        );
                        const filteredLocalGuides = allLocalGuides.filter(
                            localGuides => !optionalGuides.includes(localGuides)
                        );
                        setServicesInclusions({
                            ...servicesInclusions,
                            localGuidesInclusionsContainer: {
                                localGuidesSelector: value,
                                localGuidesText: value === "Local Guides: Yes" ? filteredLocalGuides
                                    .join(" ") : "" || "" // .join puts all serviceName in one string
                            }
                        })
                    }}
                />
                <TextBox 
                    value={servicesInclusions.localGuidesInclusionsContainer?.localGuidesText || ""}
                    onChange={(value) => 
                        setServicesInclusions ({
                            ...servicesInclusions,
                            localGuidesInclusionsContainer: {
                                ...servicesInclusions.localGuidesInclusionsContainer, localGuidesText: value
                            }
                        })
                    }
                />
            </div>

            <div className="activities_line">
                <Selector
                    options={admissions} 
                    value={servicesInclusions.activitiesInclusionsContainer?.activitiesSelector}
                    onChange={(value) => {
                        const optionalNames = checkedActivities.map(a => a.activityName); // takes the admissions name marked as "opt."
                        const allActivities = activitiesFormData.map( // takes all admissions
                            item => item.nameOfActivityContainer[0].nameOfActivity
                        );
                        const filteredActivities = allActivities.filter( // filters the checked admissions
                            activities => !optionalNames.includes(activities)
                        );
                        setServicesInclusions({
                            ...servicesInclusions,
                            activitiesInclusionsContainer: {
                                activitiesSelector: value,
                                activitiesText: value === "Admissions: Yes" ? filteredActivities
                                    .join(" ") : "" || ""
                            }
                        });
                    }}
                />
                <TextBox 
                    value={servicesInclusions.activitiesInclusionsContainer?.activitiesText}
                    onChange={(value) =>
                        setServicesInclusions({
                            ...servicesInclusions,
                            activitiesInclusionsContainer: {
                                ...servicesInclusions.activitiesInclusionsContainer,
                                activitiesText: value
                            }
                        })
                    }
                />
            </div>


            <div className="headsets_gratuities_line">
                <div className="headsets_inclusions">
                    <Selector
                        options={headsets} 
                        value={servicesInclusions.headsetsInclusionsContainer?.headsetsSelector}
                        onChange={(value) =>
                            setServicesInclusions ({
                                ...servicesInclusions,
                                headsetsInclusionsContainer: {
                                    headsetsSelector: value,
                                    headsetsText: value === "Headsets: Yes" ? "Headsets included for the visits" : ""
                                }
                            })
                        }
                    />
                    <TextBox 
                        value={servicesInclusions.headsetsInclusionsContainer?.headsetsText}
                        onChange={(value) =>
                            setServicesInclusions ({
                                ...servicesInclusions,
                                headsetsInclusionsContainer: {
                                    ...servicesInclusions.headsetsInclusionsContainer, headsetsText: value
                                }
                            })
                        }
                    />
                </div>
                <div className="gratuities_inclusions">
                    <Selector
                        options={gratuities} 
                        value={servicesInclusions.gratuitiesInclusionsContainer?.gratuitiesSelector}
                        onChange={(value) => 
                            setServicesInclusions ({
                                ...servicesInclusions,
                                gratuitiesInclusionsContainer: {
                                    gratuitiesSelector: value,
                                    gratuitiesText: value === "Gratuities: Yes" ? "Gratuities included" : ""
                                }
                            })
                        }
                    />
                    <TextBox 
                        value={servicesInclusions.gratuitiesInclusionsContainer?.gratuitiesText}
                        onChange={(value) =>
                            setServicesInclusions ({
                                ...servicesInclusions,
                                gratuitiesInclusionsContainer: {
                                    ...servicesInclusions.gratuitiesInclusionsContainer, gratuitiesText: value
                                }
                            })
                        }
                    />
                </div>
            </div>
            <div className="free_description_child_discount_line">
                <div className="free_description">
                    <Selector
                        options={freeDescription} 
                        value={servicesInclusions.freeInclusionsContainer?.freeSelector}
                        onChange={(value) => 
                            setServicesInclusions ({
                                ...servicesInclusions,
                                freeInclusionsContainer: {
                                    freeSelector: value,
                                    freeText: value === "Free description in: double/twin" ? "Frees apply per half double/twin room" : value === "Free description in: single" ? "Frees apply per single room" : value === "Free description: no" ? "" : ""
                                }
                            })
                        }
                    />
                    <TextBox 
                        value={servicesInclusions.freeInclusionsContainer?.freeText}
                        onChange={(value) =>
                            setServicesInclusions ({
                                ...servicesInclusions,
                                freeInclusionsContainer: {
                                    ...servicesInclusions.freeInclusionsContainer, freeText: value
                                }
                            })
                        }
                    />
                </div>
                
                <div className="child_discount">
                    <Selector
                        options={childDiscount} 
                        value={servicesInclusions.childDiscountInsclusionsContainer?.childDiscountSelector}
                        onChange={(value) => 
                            setServicesInclusions ({
                                ...servicesInclusions,
                                childDiscountInsclusionsContainer: {
                                    childDiscountSelector: value,
                                    childDiscountText: value === "Child discount description: Yes" ? "Until 12 years old: 50% off" : ""
                                }
                            })
                        }
                    />
                    <TextBox 
                        value={servicesInclusions.childDiscountInsclusionsContainer?.childDiscountText}
                        onChange={(value) => 
                            setServicesInclusions ({
                                ...servicesInclusions,
                                childDiscountInsclusionsContainer: {
                                    ...servicesInclusions.childDiscountInsclusionsContainer, childDiscountText: value
                                }
                            })
                        }
                    />
                </div>
            </div>

            <div className="notes_container">
                <TextArea
                    placeholder={"Notes:"} 
                    value={servicesInclusions.notesInclusionsContainer?.notesText}
                    onChange={(value) =>
                        setServicesInclusions ({
                            ...servicesInclusions,
                            notesInclusionsContainer: {
                                notesText: value
                            }
                        })
                    }
                />
            </div>
        </section>
    )
}

export default ServicesInclusions