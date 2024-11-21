import { Autocomplete, Box, TextField, Button } from "@mui/material";
import { Countries } from "../../data/CountryData";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { VscSearchFuzzy } from "react-icons/vsc";
import { Controller, useForm } from "react-hook-form";

const SearchFields = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-5 grid grid-cols-3 gap-2">
        {["Origin", "Destination", "Date"].map((i) => {
          if (i === "Date") {
            return (
              <Controller
                key={i}
                name={i.toLowerCase()}
                control={control}
                render={({ field: { onChange } }) => (
                  <DatePicker
                    key={i}
                    label={i}
                    onChange={(newValue) => {
                      console.log({ ...newValue, id: i.toLowerCase() });
                      onChange({ ...newValue, id: i.toLowerCase() });
                    }}
                  />
                )}
              />
            );
          }

          return (
            <Controller
              key={i}
              name={i.toLowerCase()}
              control={control}
              render={({ field: { onChange } }) => (
                <Autocomplete
                  options={Countries}
                  onChange={(_, newValue) => {
                    console.log({ ...newValue, id: i.toLowerCase() });
                    onChange({ ...newValue, id: i.toLowerCase() });
                  }}
                  autoHighlight
                  getOptionLabel={(option) => option.label}
                  renderOption={(props, option) => {
                    const { key, ...optionProps } = props;
                    return (
                      <Box
                        key={key}
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...optionProps}
                      >
                        <img
                          loading="lazy"
                          width="20"
                          srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                          src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                          alt=""
                        />
                        {option.label} ({option.code})
                      </Box>
                    );
                  }}
                  renderInput={(params) => <TextField {...params} label={i} />}
                />
              )}
            />
          );
        })}
      </div>

      <div className="mt-5">
        <Button type="submit" variant="contained" size="large" endIcon={<VscSearchFuzzy />}>
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchFields;
