import { useLocation } from "react-router-dom";
import FlightsInfo from "./FlightsInfo";
import OriginToDestination from "./OriginToDestination";
import PriceInfo from "./PriceInfo";
import BookingInfo from "./BookingInfo";

const FlightDetails = () => {
  const { state } = useLocation();

  return (
    <section className="container">
      <div className="grid grid-cols-4 gap-3">
        <div className="col-span-3">
          <FlightsInfo state={state} />
        </div>
        <div className="space-y-3">
          <OriginToDestination />
          <PriceInfo />
          <BookingInfo />
        </div>
      </div>
    </section>
  );
};

export default FlightDetails;
