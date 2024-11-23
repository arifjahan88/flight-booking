import { Box, Step, StepLabel, Stepper } from "@mui/material";
import { UserSearchData } from "../../hooks/useUserInfo";
import dayjs from "dayjs";

const OriginToDestination = () => {
  const { date, origin, destination } = UserSearchData();
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
              <p className="text-lg">{dayjs(date).format("D MMMM, YYYY")}</p>
              <p className="text-sm">
                {origin?.label}
                {", "}
                {origin?.code}
              </p>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel>
              <p className="text-lg">{dayjs(date).format("D MMMM, YYYY")}</p>
              <p className="text-sm">
                {destination?.label}
                {", "}
                {destination?.code}
              </p>
            </StepLabel>
          </Step>
        </Stepper>
      </Box>
    </>
  );
};

export default OriginToDestination;
