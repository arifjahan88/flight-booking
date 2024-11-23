import { Autocomplete, Button, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { selectModal } from "../../../store/slices/modalSlice";
import { useEffect } from "react";
import dayjs from "dayjs";

const CommonForm = ({ formData, onSubmit, loading }) => {
  const { editData } = useSelector(selectModal);

  const defaultValues = {
    ...(editData || {}),
    date: editData?.date ? dayjs(editData.date) : null,
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
  });

  useEffect(() => {
    if (editData) {
      reset({
        ...editData,
        date: editData.date ? dayjs(editData.date) : null,
      });
    }
  }, [editData, reset]);

  const onSubmitHandler = (data) => {
    const formattedData = {
      ...data,
      date: data.date ? data.date.toISOString() : null,
    };
    onSubmit(formattedData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-4">
      {formData.map((item, index) => {
        return (
          <div key={index}>
            <Controller
              name={item.name}
              control={control}
              defaultValue={item.type === "date" ? null : item.type === "multiselect" ? [] : ""}
              rules={{
                required: item.required ? "This field is required" : false,
              }}
              render={({ field }) => {
                if (item.type === "multiselect" || item.type === "select") {
                  return (
                    <Autocomplete
                      multiple={item.type === "multiselect"}
                      id="tags-outlined"
                      options={item?.values}
                      getOptionLabel={(option) => option}
                      value={field.value || []}
                      onChange={(_, newValue) => {
                        field.onChange(newValue);
                      }}
                      filterSelectedOptions
                      disableCloseOnSelect={item.type === "multiselect"}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          label={item.label}
                          error={!!errors[item.name]}
                          helperText={errors[item.name]?.message}
                        />
                      )}
                    />
                  );
                }
                if (item.type === "date") {
                  return (
                    <DatePicker
                      {...field}
                      label={item?.label}
                      onChange={(newValue) => {
                        field.onChange(newValue);
                      }}
                      slotProps={{
                        textField: {
                          error: !!errors[item.name],
                          helperText: errors[item.name]?.message,
                          fullWidth: true,
                        },
                      }}
                    />
                  );
                }
                return (
                  <TextField
                    {...field}
                    type={item.type}
                    label={item.label}
                    variant="outlined"
                    fullWidth
                    error={!!errors[item.name]}
                    helperText={errors[item.name]?.message}
                  />
                );
              }}
            />
          </div>
        );
      })}
      <Button disabled={loading} type="submit" variant="contained" color="primary">
        {editData ? "Update" : "Submit"}
      </Button>
    </form>
  );
};

export default CommonForm;
