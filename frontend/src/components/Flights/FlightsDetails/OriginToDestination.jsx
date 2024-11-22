import { Box, Step, StepLabel, Stepper } from "@mui/material";

const OriginToDestination = () => {
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
        <h1 className="text-xl font-bold">Origin To Destination</h1>
        <Stepper activeStep={0} orientation="vertical">
          <Step>
            <StepLabel>
              <p className="text-lg">
                {"21 Dec, 2024"}
                {", "}
                {"10:00 am"}
              </p>
              <p className="text-sm">
                {"New York"}
                {", "}
                {"USA"}
              </p>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel>
              <p className="text-lg">
                {"21 Dec, 2024"}
                {", "}
                {"10:00 am"}
              </p>
              <p className="text-sm">
                {"New York"}
                {", "}
                {"USA"}
              </p>
            </StepLabel>
          </Step>
        </Stepper>
      </Box>
    </>
  );
};

export default OriginToDestination;
