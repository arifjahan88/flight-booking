import { CircularProgress } from "@mui/material";

const TableLoader = () => {
  return (
    <div className="flex justify-center items-center mt-5">
      <CircularProgress disableShrink />
    </div>
  );
};

export default TableLoader;
