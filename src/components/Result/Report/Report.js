import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const Report = ({
  sialMpaTlplen,
  sialMpaPlmnlen,
  sialMpaPpplen,
  sialMpaPtilen,
  rawalMpaTlplen,
  rawalMpaPpplen,
  rawalMpaPlmnlen,
  rawalMpaPtilen,
  gujraMpaTlplen,
  gujrMpaPpplen,
  gujrMpaPlmnlen,
  gujrMpaPtilen,
  lhrMpaTlplen,
  lhrMpaPpplen,
  lhrMpaPlmnlen,
  lhrMpaPtilen,
}) => {
  const barChart = (
    <Bar
      data={{
        labels: [
          "Sialkot NA-1",
          "Rawalpindi NA-2",
          "Gujranwala NA-3",
          "Lahore NA-4",
        ],
        datasets: [
          {
            label: "TLP",
            backgroundColor: [
              "#001219",
              "#4a4e69",
              "#5a189a",
              "#124559",
              "#40916c",
            ],
            data: [sialMpaTlplen, rawalMpaTlplen, gujraMpaTlplen, lhrMpaTlplen],
          },
          {
            label: "PLMN",
            backgroundColor: [
              "#14213d",
              "#9a8c98",
              "#c77dff",
              "#598392",
              "#95d5b2",
            ],
            data: [
              sialMpaPlmnlen,
              rawalMpaPlmnlen,
              gujrMpaPlmnlen,
              lhrMpaPlmnlen,
            ],
          },
          {
            label: "PPP",
            backgroundColor: [
              "#14213d",
              "#9a8c98",
              "#c77dff",
              "#598392",
              "#95d5b2",
            ],
            data: [sialMpaPpplen, rawalMpaPpplen, gujrMpaPpplen, lhrMpaPpplen],
          },
          {
            label: "PTI",
            backgroundColor: [
              "#14213d",
              "#9a8c98",
              "#c77dff",
              "#598392",
              "#95d5b2",
            ],
            data: [sialMpaPtilen, rawalMpaPtilen, gujrMpaPtilen, lhrMpaPtilen],
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
