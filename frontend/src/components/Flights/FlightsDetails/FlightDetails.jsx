import { useLocation } from "react-router-dom";
import FlightsInfo from "./FlightsInfo";
import OriginToDestination from "./OriginToDestination";
import PriceInfo from "./PriceInfo";
import BookingInfo from "./BookingInfo";
import { useState } from "react";
import { useAddbookingMutation } from "../../../store/api/endpoints/booking";
import { showToast } from "../../hooks/showToast";
import { UserInfo } from "../../hooks/useUserInfo";

const FlightDetails = () => {
  const { state } = useLocation();
  const [seat, setSeat] = useState(1);
  const price = state.price * seat;
  const { _id } = UserInfo();

  //Api Call
  const [addBookings] = useAddbookingMutation();

  const onSubmit = async (data) => {
    const res = await addBookings({
      ...data,
      seats: seat,
      amount: price,
      flightId: state._id,
      user: _id,
    });
    if (res?.data?.success) {
      showToast.success(res?.data?.message);
    }
  };

  return (
    <section className="container">
      <div className="grid grid-cols-4 gap-3">
        <div className="col-span-3">
          <FlightsInfo state={state} />
        </div>
        <div className="space-y-3">
          <OriginToDestination />
          <PriceInfo price={price} />
          <BookingInfo onSubmit={onSubmit} setSeat={setSeat} />
        </div>
      </div>
    </section>
  );
};

export default FlightDetails;
