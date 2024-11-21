import { Divider, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { useState } from "react";
import { AllFilterData } from "../../data/FilterData";

const Filter = () => {
  const [filterData, setFilterData] = useState({});

  // Handle Filter Change
  const handleFilterChange = (event, filterTitle, filterValue) => {
    setFilterData((prevFilterData) => ({
      ...prevFilterData,
      [filterTitle]: event.target.checked
        ? [...(prevFilterData[filterTitle] || []), filterValue]
        : (prevFilterData[filterTitle] || []).filter((value) => value !== filterValue),
    }));
  };

  return (
    <section className="bg-red-50 px-2 rounded-lg overflow-hidden">
      <div className="flex justify-between items-center py-2">
        <h1 className="font-bold text-xl">Filter</h1>
        <button className="text-sm text-blue-600 underline" onClick={() => setFilterData({})}>
          Clear Filters
        </button>
      </div>
      <Divider sx={{ margin: "5px 0px" }} />
      {AllFilterData?.map((filter, index) => (
        <div key={index}>
          <h1 className="text-md font-bold">{filter?.title}</h1>
          <div className="mt-2">
            {filter.data.map((data, index) => (
              <div key={index} className="flex justify-between items-center">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        size="small"
                        checked={(filterData[filter?.title] || [])?.includes(data?.value)}
                        onChange={(e) => handleFilterChange(e, filter?.title, data?.value)}
                        sx={{
                          padding: "3px 10px",
                        }}
                      />
                    }
                    label={data.name}
                  />
                </FormGroup>
                <p className="text-sm">{data?.data}</p>
              </div>
            ))}
          </div>
          {AllFilterData.length - 1 !== index && <Divider sx={{ margin: "10px 0px" }} />}
        </div>
      ))}
    </section>
  );
};

export default Filter;
