import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const DatePickerComponent = ({ props, callbackData }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    callbackData(event.target.value);
    setSelectedDate(event.target.value);
  };

  const currentDate = new Date();
  const oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(currentDate.getFullYear() + 1);

  return (
    <TextField
      id="date"
      label={props?.dataLabel}
      type="date"
      value={selectedDate}
      onChange={handleDateChange}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        min: currentDate.toISOString().split('T')[0],
        max: oneYearFromNow.toISOString().split('T')[0],
      }}
    />
  );
};

export default DatePickerComponent;
