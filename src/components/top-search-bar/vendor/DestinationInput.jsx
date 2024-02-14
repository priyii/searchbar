import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import { destinations } from "../../destinationData/destinationData";

const DestinationInput = ({ value, onChange }) => {
  return (
    <Autocomplete
      sx={{ width: 300 }}
      options={destinations}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Landmark"
          variant="outlined"
          value={value == "" ? "Where to ?" : value}
          InputProps={{
            ...params.InputProps,
            startAdornment: <SearchIcon />,
          }}
        />
      )}
      onChange={(event, newValue) => {
        onChange(newValue);
      }}
    />
  );
};

export default DestinationInput;
