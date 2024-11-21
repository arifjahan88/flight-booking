import SearchFields from "../components/common/Search/SearchFields";
import Filter from "../components/Flights/Filter";
import Flights from "../components/Flights/Flights";

export const FlightsPage = () => {
  return (
    <section className="container">
      <SearchFields />
      <div className="grid grid-cols-4 gap-3">
        <div>
          <Filter />
        </div>
        <div className="col-span-3">
          <Flights />
        </div>
      </div>
    </section>
  );
};
