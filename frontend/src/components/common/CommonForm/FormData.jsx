export const FlightFormData = () => {
  return [
    { label: "Flight name", name: "flightname", type: "text", required: true },
    { label: "From", name: "from", type: "text", required: true },
    { label: "To", name: "to", type: "text", required: true },
    { label: "Date", name: "date", type: "date", required: true },
    { label: "Flight Class", name: "flightclass", type: "text", required: true },
    { label: "Facilities", name: "facilities", type: "multiselect", required: true },
    { label: "Price", name: "price", type: "number", required: true },
    { label: "Image Url", name: "imageUrl", type: "text", required: true },
    { label: "Rating", name: "rating", type: "number", required: true },
    { label: "Total Seats", name: "totalseats", type: "number", required: true },
  ];
};
