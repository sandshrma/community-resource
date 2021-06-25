//import React, { useState, useEffect } from "react";
// import axios from "axios";
import data from "./Data.json";

const GetData = () => {
  console.log("Get Data called");
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(
  //       // "https://0b80ea7e-761a-497b-aa95-1a8f76f65470.mock.pstmn.io/getpatients"
  //       '../../public/Data.json'    )
  //     .then((res) => {
  //       setData(res.data.data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);
  return { data };
};
export default GetData;
