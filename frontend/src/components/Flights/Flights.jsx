import { Pagination } from "@mui/material";
import FlightsCard from "./FlightsCard";

const Flights = ({ data, pagination }) => {
  return (
    <section className="space-y-5">
      {data?.map((item, index) => (
        <FlightsCard key={index} data={item} />
      ))}
      <Pagination
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        page={pagination?.currentPage}
        count={pagination?.totalPages}
        variant="outlined"
        shape="rounded"
      />
    </section>
  );
};

export default Flights;
