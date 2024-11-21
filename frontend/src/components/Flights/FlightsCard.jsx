import { Chip, Button } from "@mui/material";
import { Link } from "react-router-dom";

const FlightsflightsDatad = ({ flightsData }) => {
  console.log(flightsData);
  return (
    <>
      <div className="bg-white shadow-md rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-5">
        <div className="relative col-span-2">
          <img
            src={flightsData.image}
            alt={flightsData.airline}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-between col-span-3">
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2 text-teal-600">{flightsData.airline}</h2>

            <div className="mb-4">
              <h3 className="text-sm font-semibold mb-1">Facilities:</h3>
              <div className="flex gap-2 flex-wrap">
                {flightsData.amenities.map((facility, idx) => (
                  <Chip label={facility} key={idx} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-center px-2">
            <div className="my-2 flex gap-2 cursor-pointer">
              <div className="text-end w-full">
                <p className="text-sm font-bold text-gray-600">Very Good</p>
                <p className="text-xs font-semibold text-gray-800">200+ Reviews</p>
              </div>
              <button className="px-2 py-1 rounded-md border bg-teal-500 text-white font-bold">
                8.6
              </button>
            </div>
            <>
              <span className="text-xs font-semibold text-gray-600">Price:</span>
              <span className="text-xl font-bold text-gray-800">{flightsData.price}</span>
              <Link to={"/"}>
                <Button variant="outlined">Booking</Button>
              </Link>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightsflightsDatad;
