import React, { useState, useEffect } from "react";
import axios from "axios";

const Getlocation = (location) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://open.mapquestapi.com/geocoding/v1/address?", {
        params: {
          location: location,
          key: "adiGUulkEQPRixVWmGEC8PGEGYI7DvRx",
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, [location]);
  console.log(data);
  return data;
};
export default Getlocation;
