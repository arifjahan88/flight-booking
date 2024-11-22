import { IoIosAddCircle } from "react-icons/io";
import { Button, Stack } from "@mui/material";

const AddButton = ({ label, onclick }) => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      sx={{
        marginBottom: 2,
      }}
    >
      <Button onClick={onclick} variant="outlined" startIcon={<IoIosAddCircle />}>
        {label || "Add"}
      </Button>
    </Stack>
  );
};

export default AddButton;
