import { Box, Divider } from "@mui/material";

const PriceInfo = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          border: "1px solid #ced4da",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        <h1 className="text-xl font-bold">Price Information</h1>
        <div className="flex justify-between mt-2">
          <p className="text-lg">Price: </p>
          <p className="text-lg font-semibold">{"500"} Taka</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-lg">Platform Fee:</p>
          <p className="text-lg font-semibold">{"200"} Taka</p>
        </div>
        <Divider sx={{ margin: "5px 0px" }} />
        <div className="flex justify-between">
          <p className="text-lg">Total Amount</p>
          <p className="text-lg font-semibold">{"500"} Taka</p>
        </div>
      </Box>
    </>
  );
};

export default PriceInfo;
