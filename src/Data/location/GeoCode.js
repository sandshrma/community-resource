import { useState, useEffect } from "react";
import axios from "axios";
const Getlocation = (location) => {
  const [loading, setloading] = useState(true);
  const address = `http://api.positionstack.com/v1/forward`;
  const zip = `http://api.zippopotam.us/us/${location}`;
  let url;
  let params = {};
  if (typeof location === "number") {
    url = zip;
  } else {
    url = address;
    params = {
      access_key: `8d1e96540f82bbf549ac331459064dad`,
      query: location,
    };
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(url, { params })
      .then((res) => {
        setData(res.data);
        setloading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return { loading, data };
};
export default Getlocation;
