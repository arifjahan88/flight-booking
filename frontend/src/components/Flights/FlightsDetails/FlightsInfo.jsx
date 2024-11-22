import { Alert, Badge, Card, CardContent } from "@mui/material";
import { FaCheck } from "react-icons/fa6";

const FlightsInfo = ({state}) => {
    const descData = [
        {
          title: "Great choice",
          data: [
            "CustomerRating: 7.7",
            "Most popular fuel policy: Full to Full",
            "Well-maintained cars",
            "Free Cancellation",
            "Helpful counter staff",
            "Easy to find counter",
          ],
        },
        {
          title: "Included in the price",
          data: [
            "Free cancellation up to 48 hours before pick-up",
            "Collision Damage Waiver with $0 deductible",
            "Theft Protection with $0 excess",
            "Unlimited mileage",
          ],
        },
      ];
  return (
    <div>
      <Alert
        severity="info"
        color="info"
        sx={{ margin: "10px 0px", border: "1px solid green", fontSize: "15px" }}
      >
        Free cancellation up to 48 hours before
      </Alert>
      <Card className="overflow-hidden">
        {/* Image Section */}
        <div className="relative h-96 overflow-hidden">
          <img
            src={state?.image}
            alt="Flight"
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-4 right-4">
            <Badge className="bg-green-500 text-white px-2">{state.rating}</Badge>
          </div>
        </div>

        <CardContent>
          {/* Amenities Section */}
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">{state.airline}</h2>
              <span className="text-2xl font-semibold text-blue-600">{state.price}</span>
            </div>
            <p className="text-gray-600">{state.flightClass} Class</p>
            <h3 className="text-sm font-semibold text-gray-700 my-2">Facilites</h3>
            <div className="flex flex-wrap gap-2">
              {state.amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                >
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            {descData.map((desc, index, arr) => (
              <div
                key={index}
                className={`p-5 ${arr.length - 1 !== index && "border-b"} border-gray-300`}
              >
                <h2 className="text-xl font-semibold">{desc.title}</h2>
                <ul className="text-sm text-gray-800 grid grid-cols-2 mt-2 gap-2">
                  {desc.data &&
                    desc.data.map((choice, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <FaCheck />
                        {choice}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FlightsInfo;
