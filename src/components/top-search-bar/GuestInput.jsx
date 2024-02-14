import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import QuantityInput from "./vendor/QuantityInput"; // Import QuantityInput component
import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const GuestInput = ({ guests, onChange ,callbackData }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedGuests, setSelectedGuests] = useState(guests);
  const [selectedValue, setSelectedValue] = useState({
    'adults': 2,
    'children': 0,
    'rooms': 1
  })

  const handleQuantityChange = (type, value) => {
    setSelectedGuests({ ...selectedGuests, [type]: value });
    setSelectedValue({ ...selectedValue, [type]: value });
  };

  const handleApply = () => {
    // onChange(selectedGuests);
    setAnchorEl(null);
    callbackData(selectedValue)
  };

  const handleCancel = () => {
    setSelectedGuests(guests);
    setAnchorEl(null);
  };

  const totalGuests =
    typeof selectedGuests.adults === "number" &&
      typeof selectedGuests.children === "number"
      ? selectedGuests.adults + selectedGuests.children
      : 0;

  const open = Boolean(anchorEl);
  const id = open ? "guest-input-popover" : undefined;

  return (
    <>
      <div>
        <TextField
          label={`Guests and rooms`}
          variant="outlined"
          value={`${selectedValue?.adults + selectedValue?.children} guests, ${selectedValue?.rooms} room`}
          onClick={(event) => setAnchorEl(event.currentTarget)}
          InputProps={{
            readOnly: true,
          }}
        />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Box sx={{ p: 2 }}>
            <QuantityInput
              label="Adults"
              defaultValue={2}
              value={selectedGuests.adults}
              onChange={(value) => handleQuantityChange("adults", value)}
              maxAllowed={2* selectedValue.rooms}
            />
            <QuantityInput
              defaultValue={0}
              label="Children"
              value={selectedGuests.children}
              onChange={(value) => handleQuantityChange("children", value)}
            />
            <QuantityInput
              label="Rooms"
              defaultValue={1}
              value={selectedGuests.rooms}
              onChange={(value) => handleQuantityChange("rooms", value)}
            />
            <div >
              <Button sx={{ mx: 2, my: 2 }} onClick={handleApply} variant="contained" color="primary">
                Apply
              </Button>
              <Button
                onClick={handleCancel}
                variant="contained"
                color="secondary"
              >
                Cancel
              </Button>
            </div>
          </Box>
        </Popover>
      </div>


    </>
  );
};

export default GuestInput;
