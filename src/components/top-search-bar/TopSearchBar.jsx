import React, { useState } from "react";
import "./css/TopSearchBar.css";
import Button from "@mui/material/Button";
import GuestInput from "./GuestInput";
import DatePicker from "./vendor/DatePicker";
import DestinationInput from "./vendor/DestinationInput";
import { Box, Paper, Table } from "@mui/material";

const TopSearchBar = () => {
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [roomdetails, setroomdetails] = useState({});

  const handleSearch = () => {
    setShowDetails(true);
  };

  const SearchData = (data) => {
    setroomdetails(data);
  };

  return (
    <div>
      <Box className="top_searchbar">
        <Box className="innerBox">
          <Paper>
            <DestinationInput
              value={destination}
              onChange={(data) => setDestination(data)}
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Paper>
          <Paper>
            <DatePicker
              label="Check-in"
              value={checkInDate}
              dataLabel="Check-in"
              callbackData={(data) => setCheckInDate(data)}
            />
          </Paper>
          <Paper>
            <DatePicker
              label="Check-out"
              value={checkOutDate}
              dataLabel="Check-out"
              callbackData={(data) => setCheckOutDate(data)}
            />
          </Paper>
          <Paper>
            <GuestInput guests={1} callbackData={SearchData} />
          </Paper>
          <Paper>
            <Button variant="contained" color="primary" onClick={handleSearch}>
              Search
            </Button>
          </Paper>
        </Box>
      </Box>
      {showDetails ? (
        <div>
          <Table>
            <tr>
              <th>Landmark</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Adult</th>
              <th>Children</th>
              <th>Rooms</th>
              <th>Total Guest</th>
            </tr>

            <tr>
              <td alignCenter>{destination}</td>
              <td alignCenter>{checkInDate}</td>
              <td alignCenter>{checkOutDate}</td>
              <td>{roomdetails?.adults}</td>
              <td>{roomdetails?.children}</td>
              <td>{roomdetails?.rooms}</td>
              <td>
                {parseInt(roomdetails?.adults) +
                  parseInt(roomdetails?.children)}
              </td>
            </tr>
          </Table>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TopSearchBar;
