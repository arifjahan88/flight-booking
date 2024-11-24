import { Countries } from "../../../data/CountryData";
import { FLIGHT_FACILITIES } from "./constants";

export const FlightFormData = () => {
  const FilterCountries = Countries.map((country) => {
    return country.label;
  });
  return [
    { label: "Flight name", name: "flightname", type: "text", required: true },
    {
      label: "From",
      name: "from",
      type: "select",
      values: FilterCountries || [],
      required: true,
    },
    { label: "To", name: "to", type: "select", values: FilterCountries || [], required: true },
    { label: "Date", name: "date", type: "date", required: true },
    { label: "Flight Class", name: "flightclass", type: "text", required: true },
    {
      label: "Facilities",
      name: "facilities",
      type: "multiselect",
      values: FLIGHT_FACILITIES || [],
      required: true,
    },
    { label: "Price", name: "price", type: "number", required: true },
    { label: "Image Url", name: "imageUrl", type: "text", required: false },
    { label: "Rating", name: "rating", type: "number", required: true },
    { label: "Total Seats", name: "totalseats", type: "number", required: true },
  ];
};
