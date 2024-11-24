import { useState } from "react";
import SearchFields from "../components/common/Search/SearchFields";
import Filter from "../components/Flights/Filter";
import Flights from "../components/Flights/Flights";
import TableLoader from "../components/Loader/TableLoader";

export const FlightsPage = () => {
  const [searchData, setSearchData] = useState({
    data: [],
    loading: true,
    pagination: {},
  });
  return (
    <section className="container">
      <SearchFields setSearchData={setSearchData} />
      <div className="grid grid-cols-4 gap-3">
        <div>
          <Filter />
        </div>
        <div className="col-span-3">
          {searchData.loading ? (
            <TableLoader />
          ) : searchData?.data.length === 0 ? (
            <p className="text-center mt-5 text-2xl font-bold">No Flights Found</p>
          ) : (
            <Flights data={searchData?.data} pagination={searchData?.pagination} />
          )}
        </div>
      </div>
    </section>
  );
};
