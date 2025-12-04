import "../../index.css"
import TextBox from "../TextBox"
import TextArea from "../TextArea"
import Selector from "../Selector"
import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

function ServicesInclusions() {

    const { localGuidesFormData } = useContext(CounterContext)

    const { activitiesFormData } = useContext(CounterContext)

    const { servicesInclusions, setServicesInclusions } = useContext(CounterContext)

    return (
        <section id="services_inclusions">
            <div className="transportation_tour_guide_line">
                <div className="transportation_inclusions">
                    <p>Transportation:</p>
                    <Selector 
                        value={servicesInclusions.transportationInclusionsContainer?.transportationSelector || ""}
                            onChange={(value) =>
                                setServicesInclusions ({
                                    ...servicesInclusions,
                                            transportationInclusionsContainer: {
                                                transportationSelector: value,
                                                transportationText: value === "Yes" ? "Tourist bus included for the entire tour, with driver expenses included." : ""
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
                    <p>Guide:</p>
                    <Selector 
                        value={servicesInclusions.guideInclusionsContainer?.guideSelector}
                        onChange={(value) =>
                            setServicesInclusions ({
                                ...servicesInclusions,
                                    guideInclusionsContainer: {
                                        guideSelector: value,
                                        guideText: value === "Yes" ? "Tour Guide for the entire tour with expenses included" : ""
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
                    <p>Flights:</p>
                    <Selector 
                        value={servicesInclusions.flightInclusionsContainer?.flightSelector}
                        onChange={(value) =>
                            setServicesInclusions ({
                                ...servicesInclusions,
                                    flightInclusionsContainer: {
                                        flightSelector: value,
                                        flightText: value === "Yes" ? "Flights included as mentioned in the itinerary" : ""
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
                    <p>Train:</p>
                    <Selector 
                        value={servicesInclusions.trainInclusionsContainer?.trainSelector}
                        onChange={(value) =>
                            setServicesInclusions ({
                                ...servicesInclusions,
                                trainInclusionsContainer: {
                                    trainSelector: value,
                                    trainText: value === "Yes" ? "Train included as mentioned in the itinerary" : ""
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
                <p>Local Guides:</p>
                <Selector 
                    value={servicesInclusions.localGuidesInclusionsContainer?.localGuidesSelector}
                    onChange={(value) =>
                        setServicesInclusions ({
                            ...servicesInclusions,
                            localGuidesInclusionsContainer: {
                                localGuidesSelector: value,
                                localGuidesText: value === "Yes" ? localGuidesFormData
                                    .map(item => item.serviceNameContainer[0].serviceName)
                                    .join(" | ") : "" || "" // .join puts all serviceName in one string separated by "|"
                            }
                        })
                    }
                />
                <TextBox 
                    value={servicesInclusions.localGuidesInclusionsContainer?.localGuidesText}
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
                <p>Activities:</p>
                <Selector 
                    value={servicesInclusions.activitiesInclusionsContainer?.activitiesSelector}
                    onChange={(value) =>
                        setServicesInclusions ({
                            ...servicesInclusions,
                            activitiesInclusionsContainer: {
                                activitiesSelector: value,
                                activitiesText: value === "Yes" ? activitiesFormData.map(item => item.nameOfActivityContainer[0].nameOfActivity). join(" | ") : "" || ""
                            }
                        })
                    }
                />
                <TextBox 
                    value={servicesInclusions.activitiesInclusionsContainer?.activitiesText}
                    onChange={(value) =>
                        setServicesInclusions ({
                            ...servicesInclusions,
                            activitiesInclusionsContainer: {
                                ...servicesInclusions.activitiesInclusionsContainer, activitiesText: value
                            }
                        })
                    }
                />
            </div>

            <div className="headsets_gratuities_line">
                <div className="headsets_inclusions">
                    <p>Headsets:</p>
                    <Selector 
                        value={servicesInclusions.headsetsInclusionsContainer?.headsetsSelector}
                        onChange={(value) =>
                            setServicesInclusions ({
                                ...servicesInclusions,
                                headsetsInclusionsContainer: {
                                    headsetsSelector: value,
                                    headsetsText: value === "Yes" ? "Headsets included for the visits" : ""
                                }
                            })
                        }
                    />
                    <TextBox 
                        value={servicesInclusions.headsetsInclusionsContainer?.headsetsText}
                        onChange={(value) =>
                            setServicesnclusions ({
                                ...servicesInclusions,
                                headsetsInclusionsContainer: {
                                    ...servicesInclusions.headsetsInclusionsContainer, headsetsText: value
                                }
                            })
                        }
                    />
                </div>
                <div className="gratuities_inclusions">
                    <p>Gratuities:</p>
                    <Selector 
                        value={servicesInclusions.gratuitiesInclusionsContainer?.gratuitiesSelector}
                        onChange={(value) => 
                            setServicesInclusions ({
                                ...servicesInclusions,
                                gratuitiesInclusionsContainer: {
                                    gratuitiesSelector: value,
                                    gratuitiesText: value === "Yes" ? "Gratuities included" : ""
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
                    <p>Free description:</p>
                    <Selector 
                        value={servicesInclusions.freeInclusionsContainer?.freeSelector}
                        onChange={(value) => 
                            setServicesInclusions ({
                                ...servicesInclusions,
                                freeInclusionsContainer: {
                                    freeSelector: value,
                                    freeText: value === "Yes" ? "Frees apply per half double/twin room" : ""
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
                    <p>Child discount:</p>
                    <Selector 
                        value={servicesInclusions.childDiscountInsclusionsContainer?.childDiscountSelector}
                        onChange={(value) => 
                            setServicesInclusions ({
                                ...servicesInclusions,
                                childDiscountInsclusionsContainer: {
                                    childDiscountSelector: value,
                                    childDiscountText: value === "Yes" ? "Until 12 years old: 50% off" : ""
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
                <p>Notes:</p>
                <TextArea 
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