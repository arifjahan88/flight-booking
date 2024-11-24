import { Autocomplete, Box, TextField, Button } from "@mui/material";
import { Countries } from "../../../data/CountryData";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { VscSearchFuzzy } from "react-icons/vsc";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import dayjs from "dayjs";
import { useGetflightssearchQuery } from "../../../store/api/endpoints/flights";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addSearchData } from "../../../store/slices/userInfo";
import { showToast } from "../../hooks/showToast";

const SearchFields = ({ setSearchData }) => {
  const [search] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  //Api Call
  const { data, isFetching } = useGetflightssearchQuery(
    {
      origin: defaultOrigin,
      destination: defaultDestination,
      date: defaultDate,
    },
    {
      skip: !defaultOrigin || !defaultDestination || !defaultDate,
    }
  );

  useEffect(() => {
    if (data) {
      setSearchData({
        data: data?.data,
        loading: isFetching || false,
      });
    }
  }, [data, setSearchData, isFetching]);

  const onSubmit = (data) => {
    if (!data.origin || !data.destination || !data.date) {
      showToast.error("Please fill all the fields");
      return;
    }

    dispatch(addSearchData({ ...data, date: dayjs(data.date).format("YYYY-MM-DD") }));
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
        defaultDestination || defaultDate || defaultDestinationCountry ? "flex-row" : "flex-col"
      }`}
    >
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
        {["Origin", "Destination", "Date"].map((i) => {
          if (i === "Date") {
            return (
              <Controller
                key={i}
                name={i.toLowerCase()}
                control={control}
                rules={{ required: `${i} is required` }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <DatePicker
                    key={i}
                    label={i}
                    value={value}
                    disablePast
                    onChange={(newValue) => {
                      onChange(newValue);
                    }}
                    slotProps={{
                      textField: {
                        error: !!error,
                        helperText: error?.message,
                      },
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
              rules={{ required: `${i} is required` }}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
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
                  renderInput={(params) => (
                    <TextField {...params} label={i} error={!!error} helperText={error?.message} />
                  )}
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
