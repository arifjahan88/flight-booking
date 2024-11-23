import FlightsCard from "./FlightsCard";

const Flights = ({ data }) => {
  return (
    <section className="space-y-5">
      {data?.map((item, index) => (
        <FlightsCard key={index} data={item} />
      ))}
      {/* <FlightsCard
        flightsData={{
          airline: "Emirates",
          flightClass: "Economy",
          price: "$500",
          rating: "4+ Star",
          amenities: ["WiFi", "In-flight Meals", "Entertainment"],
          image:
            "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
      /> */}
    </section>
  );
};

export default Flights;
