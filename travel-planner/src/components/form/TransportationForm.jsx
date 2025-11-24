import "../../index.css";
import TextBox from "../TextBox";
import OptionalButton from "../OptionalButton";
import Bar from "../Bar";
import AddNewElementBtn from "../AddNewElementBtn";
import DriverExpensesForm from "./DriverExpensesForm";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useEffect, useState } from "react";

function TransportationForm({ index, transportationFormData, setTransportationFormData, numOfPaxData, sendDriverExpensesToNet }) {

  const data = transportationFormData[index] || {
    typeOfVehicle: "",
    priceOfVehicle: "",
  };

  const addTransportationData = () =>
    setTransportationFormData([
      ...transportationFormData,
      {
        typeOfVehicle: "",
        priceOfVehicle: "",
      },
    ]);

  const updateValue = (key, value) => {
    const updated = [...transportationFormData];
    updated[index] = { ...updated[index], [key]: value };
    setTransportationFormData(updated);
  };

  /* ---- Update Text Box value - Driver Expenses Form --- */
  const [driverExpensesFormData, setDriverExpensesFormData] = useLocalStorage("driverexpensesformdata", [
    {
      multiplicationDriverMeals: [{ pricePerDay: "", numOfDays: "" }],
      multiplicationDriverAccommodation: [{ pricePerDay: "", numOfDays: "" }],
    },
  ]);

  const updateMultiplicationDriverData = (formIndex, section, key, index, value) => {
    const updated = [...driverExpensesFormData];
    updated[formIndex] = {
      ...updated[formIndex],
      [section]: updated[formIndex][section].map((line, i) =>
        i === index ? { ...line, [key]: value } : line
      ),
    };
    setDriverExpensesFormData(updated);
  };

  return (
    <section id="transportation_form_container">
      <Bar barContent={["Transportation"]} />
      <div className="transportation_form">
        <TextBox
          value={data.typeOfVehicle || ""}
          onChange={(value) => updateValue("typeOfVehicle", value)}
        />
        <TextBox
          value={data.priceOfVehicle || ""}
          onChange={(value) => updateValue("priceOfVehicle", value)}
          placeholder="€"
        />
        <div className="optional_button_container">
          <OptionalButton />
        </div>
      </div>

      {driverExpensesFormData.map((form, formIndex) => (
        <DriverExpensesForm
          key={formIndex}
          formIndex={formIndex}
          multiplicationDriverMeals={form.multiplicationDriverMeals}
          multiplicationDriverAccommodation={form.multiplicationDriverAccommodation}
          updateMultiplicationDriverData={updateMultiplicationDriverData}
        />
      ))}

      <AddNewElementBtn onAdd={addTransportationData} text="Add another line" />
    </section>
  );
}

export default TransportationForm;