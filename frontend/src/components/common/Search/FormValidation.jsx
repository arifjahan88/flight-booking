export const validateForm = (data) => {
  const errors = {};
  if (!data.origin) {
    errors.origin = "Origin is required";
  }
  if (!data.destination) {
    errors.destination = "Destination is required";
  }
  if (!data.date) {
    errors.date = "Date is required";
  }
  return errors;
};
