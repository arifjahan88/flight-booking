import { Autocomplete, Box, TextField, Button } from "@mui/material";
import { Countries } from "../../../data/CountryData";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { VscSearchFuzzy } from "react-icons/vsc";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import dayjs from "dayjs";

const SearchFields = () => {
  const [search] = useSearchParams();
  const navigate = useNavigate();

  // Get default values from URL
  const defaultOrigin = search.get("origin");
  const defaultDestination = search.get("destination");
  const defaultDate = search.get("date");

  // Find country objects for default values
  const defaultOriginCountry = Countries.find((country) => country.label === defaultOrigin);
  const defaultDestinationCountry = Countries.find(
    (country) => country.label === defaultDestination
  );

  const { control, handleSubmit } = useForm({
    defaultValues: {
      origin: defaultOriginCountry || null,
      destination: defaultDestinationCountry || null,
      date: defaultDate ? dayjs(defaultDate) : null,
    },
  });

  const onSubmit = (data) => {
    console.log(data);

    navigate(
      `/flights?origin=${data.origin.label}&destination=${data.destination.label}&date=${dayjs(
        data?.date?.$d
      ).format("YYYY-MM-DD")}`
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex gap-2 items-center p-2 ${
        defaultDestination && defaultDate && defaultDestinationCountry ? "flex-row" : "flex-col"
      }`}
    >
      <div className="mt-5 grid grid-cols-3 gap-2 w-full">
        {["Origin", "Destination", "Date"].map((i) => {
          if (i === "Date") {
            return (
              <Controller
                key={i}
                name={i.toLowerCase()}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    key={i}
                    label={i}
                    value={value}
                    onChange={(newValue) => {
                      onChange(newValue);
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
              render={({ field: { onChange, value } }) => (
                <Autocomplete
                  options={Countries}
                  onChange={(_, newValue) => {
                    onChange(newValue);
                  }}
                  value={value}
                  autoHighlight
                  getOptionLabel={(option) => option?.label || ""}
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
