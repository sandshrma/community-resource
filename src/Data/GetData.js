import { useState, useEffect } from "react";
// import axios from "axios";
import data from "./Data.json";

const GetData = (term,next) => {
  const [loading,isLoading]=useState(true);
  const [Data,setData]=useState([]);
  console.log("Get Data called")
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

  // console.log(abc);
  // useEffect(() => {
  //   setTimeout(() => {
  //     isLoading(false);
  //   }, 1000);
  // }, []);
  // return [abc,loading];

  // return new Promise((resolve)=>{
  //   setTimeout(()=>{
  //     return({data});
  //   },1000);
  // })
  return {data};
};
export default GetData;
