import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const Report = ({ mnaData, mpaData }) => {
  let fetchData = mnaData.filter((val) => {
    return val.party;
  });

  let fetchDataCount = fetchData.length;

  let fetchDataNo = mpaData.filter((val) => {
    return val.party;
  });
  let fetchDataNoCount = fetchDataNo.length;

  let fetchCity = mnaData.filter((val) => {
    return (val.cityName = "sialkot");
  });
  let fetchCityNo = fetchCity.length;

  let city = mpaData.filter((val) => {
    return val.cityname == "sialkot";
  });
  let cityCount = city.length;

  const barChart = (
    <Bar
      data={{
        labels: [
          "Total Votes",
          "Sialkot",
          "Lahore",
          "Gujranwala",
          "Rawalpindi",
        ],
        datasets: [
          {
            label: "Total Voters",
            backgroundColor: [
              "#001219",
              "#4a4e69",
              "#5a189a",
              "#124559",
              "#40916c",
            ],
            data: [155, 30, 50, 40, 35],
          },
          {
            label: "Casted Votes",
            backgroundColor: [
              "#14213d",
              "#9a8c98",
              "#c77dff",
              "#598392",
              "#95d5b2",
            ],
            data: [107, 26, 46, 31, 30],
          },
        ],
      }}
    />
  );

  return (
    <>
      <div style={{ width: "82%", margin: "10px auto" }}>{barChart}</div>
    </>
  );
};

export default Report;
