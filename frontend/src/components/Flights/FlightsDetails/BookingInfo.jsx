import { useForm, Controller } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/material";

const BookingInfo = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form data:", data);
    // Handle form submission here
  };

  return (
    <>
      <h1 className="text-xl">Book Now</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                className="w-full"
                label="Name"
                variant="outlined"
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                className="w-full"
                label="Email"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />

          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{11}$/,
                message: "Please enter a valid 11-digit phone number",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                className="w-full"
                label="Phone"
                variant="outlined"
                error={!!errors.phone}
                helperText={errors.phone?.message}
              />
            )}
          />

          <Button type="submit" variant="contained" className="w-full">
            Book
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default BookingInfo;
