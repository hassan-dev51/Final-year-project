import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";

import imran from "../../assets/img/imran.jpg";
import saad from "../../assets/img/saad.jpg";
import shahbaz from "../../assets/img/shahbaz.jpg";
import usman from "../../assets/img/aliafzal.png";
import khawajaAif from "../../assets/img/w353.jpg";
import bilawal from "../../assets/img/bilawal.jpeg";
import raza from "../../assets/img/raza.jpeg";
import qari from "../../assets/img/qarisamar.png";

import ResultCard from "./ResultCard";
import "./Result.css";
import Report from "./Report/Report";

const Result = () => {
  const [mnaData, setMnaData] = useState([]);
  const [mpaData, setMpaData] = useState([]);
  const [loading, setloading] = useState(true);

  const getDataMna = async () => {
    try {
      const res = await fetch("/castvote", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      setMnaData(await res.json());
      setloading(false);
    } catch (error) {
      console.log("=============error of userContact=======================");
      console.log(error);
      console.log("====================================");
    }
  };
  const getDataMpa = async () => {
    try {
      const res = await fetch("/mpacastvote", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      setMpaData(await res.json());
    } catch (error) {
      console.log("=============error of userContact=======================");
      console.log(error);
      console.log("====================================");
    }
  };
  // PLMN got vote from sialkot
  let siaPlmn = mnaData.filter((ele) => {
    return ele.cityname === "sialkot" && ele.party === "PLMN";
  });
  let sialenPlmn = siaPlmn.length;
  //PLMN got vote form lahore
  let lhrPlmn = mnaData.filter((ele) => {
    return ele.cityname === "lahore" && ele.party === "PLMN";
  });
  let lhrlenPlmn = lhrPlmn.length;

  //PLMN got vote form gujranwala
  let gujrPlmn = mnaData.filter((ele) => {
    return ele.cityname === "gujranwala" && ele.party === "PLMN";
  });
  let gujrlenPlmn = gujrPlmn.length;
  //PLMN got vote form rawalpindi
  let rawalPlmn = mnaData.filter((ele) => {
    return ele.cityname === "rawalpindi" && ele.party === "PLMN";
  });
  let rawallenPlmn = rawalPlmn.length;
  //total plmn votes for mna
  let totalPlmn = lhrlenPlmn + sialenPlmn + rawallenPlmn + gujrlenPlmn;

  //PTI Got vote from sialkot
  let sialPti = mnaData.filter((ele) => {
    return ele.cityname === "sialkot" && ele.party === "PTI";
  });
  let sialLenPti = sialPti.length;

  //from lahore
  let lhrPti = mnaData.filter((ele) => {
    return ele.cityname === "lahore" && ele.party === "PTI";
  });
  let lhrLenPti = lhrPti.length;
  //from rawalpindi
  let rawalPti = mnaData.filter((ele) => {
    return ele.cityname === "rawalpindi" && ele.party === "PTI";
  });
  let rawalLenPti = rawalPti.length;
  //from gujranwala
  let gujraPti = mnaData.filter((ele) => {
    return ele.cityname === "gujranwala" && ele.party === "PTI";
  });
  let gujraLenPti = gujraPti.length;
  //total vote got pti

  let totalPti = sialLenPti + lhrLenPti + rawalLenPti + gujraLenPti;

  //ppp vote form sialkot
  let sialPpp = mnaData.filter((ele) => {
    return ele.cityname === "sialkot" && ele.party === "PPP";
  });
  let sialLenPpp = sialPpp.length;
  //from lahore
  let lhrPpp = mnaData.filter((ele) => {
    return ele.cityname === "lahore" && ele.party === "PPP";
  });
  let lhrLenPpp = lhrPpp.length;
  //from gujra
  let gurjPpp = mnaData.filter((ele) => {
    return ele.cityname === "gujranwala" && ele.party === "PPP";
  });
  let gujrLenPpp = gurjPpp.length;
  //from rawalpindi
  let rawlPpp = mnaData.filter((ele) => {
    return ele.cityname === "rawalpindi" && ele.party === "PPP";
  });
  let rawalLenPpp = rawlPpp.length;
  //totalppp vote
  let totalppp = sialLenPpp + lhrLenPpp + gujrLenPpp + rawalLenPpp;

  //tlp  vote from sialkot
  let sialTlp = mnaData.filter((ele) => {
    return ele.cityname === "sialkot" && ele.party === "TLP";
  });
  let sialenTlp = sialTlp.length;
  //from gujra
  let gujrTlp = mnaData.filter((ele) => {
    return ele.cityname === "gujranwala" && ele.party === "TLP";
  });
  let gujrlenTlp = gujrTlp.length;
  //from rawal
  let rawalTlp = mnaData.filter((ele) => {
    return ele.cityname === "rawalpindi" && ele.party === "TLP";
  });
  let rawallenTlp = rawalTlp.length;
  //from lahore
  let lhrTlp = mnaData.filter((ele) => {
    return ele.cityname === "lahore" && ele.party === "TLP";
  });
  let lhrlenTlp = lhrTlp.length;
  //totaltlp
  let totalTlp = sialenTlp + gujrlenTlp + rawallenTlp + lhrlenTlp;

  // <---------------------------------mpa------------------------------------------->
  //mpa vote form sialkot
  let sialMpaPlmn = mpaData.filter((ele) => {
    return ele.cityname === "sialkot" && ele.party === "PLMN";
  });
  let sialMpaPlmnlen = sialMpaPlmn.length;
  //form lahore
  let lhrMpaPlmn = mpaData.filter((ele) => {
    return ele.cityname === "lahore" && ele.party === "PLMN";
  });
  let lhrMpaPlmnlen = lhrMpaPlmn.length;
  // from gujra
  let gujrMpaPlmn = mpaData.filter((ele) => {
    return ele.cityname === "gujranwala" && ele.party === "PLMN";
  });
  let gujrMpaPlmnlen = gujrMpaPlmn.length;
  //from rawalpindi
  let rawalMpaPlmn = mpaData.filter((ele) => {
    return ele.cityname === "rawalpindi" && ele.party === "PLMN";
  });
  let rawalMpaPlmnlen = rawalMpaPlmn.length;
  //total plmn
  let totalmpa =
    sialMpaPlmnlen + lhrMpaPlmnlen + gujrMpaPlmnlen + rawalMpaPlmnlen;

  //mpa vote pti from silakot
  let sialMpaPti = mpaData.filter((ele) => {
    return ele.cityname === "sialkot" && ele.party === "PTI";
  });
  let sialMpaPtilen = sialMpaPti.length;
  //from lahore
  let lhrMpaPti = mpaData.filter((ele) => {
    return ele.cityname === "lahore" && ele.party === "PTI";
  });
  let lhrMpaPtilen = lhrMpaPti.length;
  //from gujra
  let gujrMpaPti = mpaData.filter((ele) => {
    return ele.cityname === "gujranwala" && ele.party === "PTI";
  });
  let gujrMpaPtilen = gujrMpaPti.length;
  //from pindi
  let rawalMpaPti = mpaData.filter((ele) => {
    return ele.cityname === "rawalpindi" && ele.party === "PTI";
  });
  let rawalMpaPtilen = rawalMpaPti.length;
  // totalptimpa
  let totalptimpa =
    sialMpaPtilen + lhrMpaPtilen + gujrMpaPtilen + rawalMpaPtilen;
  //mpa vote ppp from sialkot
  let sialMpaPpp = mpaData.filter((ele) => {
    return ele.cityname === "sialkot" && ele.party === "PPP";
  });
  let sialMpaPpplen = sialMpaPpp.length;
  //from lahore
  let lhrMpaPpp = mpaData.filter((ele) => {
    return ele.cityname === "lahore" && ele.party === "PPP";
  });
  let lhrMpaPpplen = lhrMpaPpp.length;
  //from gujra
  let gujraMpaPpp = mpaData.filter((ele) => {
    return ele.cityname === "gujranwala" && ele.party === "PPP";
  });
  let gujrMpaPpplen = gujraMpaPpp.length;
  //from pindi
  let rawalMpaPpp = mpaData.filter((ele) => {
    return ele.cityname === "rawalpindi" && ele.party === "PPP";
  });
  let rawalMpaPpplen = rawalMpaPpp.length;
  //totalpppmpa
  let totalpppmpa =
    sialMpaPpplen + lhrMpaPpplen + gujrMpaPpplen + rawalMpaPpplen;
  //mpa vote tlp from sialkot
  let sialMpaTlp = mpaData.filter((ele) => {
    return ele.cityname === "sialkot" && ele.party === "TLP";
  });
  let sialMpaTlplen = sialMpaTlp.length;
  //from lahore
  let lhrMpaTlp = mpaData.filter((ele) => {
    return ele.cityname === "lahore" && ele.party === "TLP";
  });
  let lhrMpaTlplen = lhrMpaTlp.length;
  //from gujra
  let gujrMpaTlp = mpaData.filter((ele) => {
    return ele.cityname === "gujranwala" && ele.party === "TLP";
  });
  let gujraMpaTlplen = gujrMpaTlp.length;
  //from rawalpindi
  let rawalMpaTlp = mpaData.filter((ele) => {
    return ele.cityname === "rawalpindi" && ele.party === "TLP";
  });
  let rawalMpaTlplen = rawalMpaTlp.length;
  //total tlp
  let totalmpaTlp =
    sialMpaTlplen + lhrMpaTlplen + gujraMpaTlplen + rawalMpaTlplen;

  let totalchartpti = totalPti + totalptimpa;
  let totalchartplmn = totalPlmn + totalmpa;
  let totalchartppp = totalppp + totalpppmpa;
  let totalchartptlp = totalTlp + totalmpaTlp;
  useEffect(() => {
    getDataMna();
    getDataMpa();
  }, []);
  const data = {
    labels: ["PTI", "PLMN", "PPP", "TLP"],
    datasets: [
      {
        data: [totalchartpti, totalchartplmn, totalchartppp, totalchartptlp],
        backgroundColor: ["#e53935", "#43a047", "#3e2723", "#00c853"],
      },
    ],
  };
  return (
    <div>
      <header className="result_heading">
        <Link to="/">Home</Link>
        <h2
          style={{
            textAlign: "center",
            letterSpacing: 5,
            fontSize: "1.5rem",
            margin: 0,
          }}
        >
          Ofiicial Result Of Election{" "}
          <span style={{ fontSize: "3rem" }}>2023</span>
        </h2>
      </header>
      <div style={{ width: 400, margin: "0px auto" }}>
        <Doughnut data={data} />
      </div>
      <ResultCard
        partyname="PTI"
        image={imran}
        no="1"
        pic={usman}
        sialkotVote={sialLenPti}
        lahoreVote={lhrLenPti}
        rawalpindiVote={rawalLenPti}
        gujVote={gujraLenPti}
        totalPlmn={totalPti}
        sialMpaPlm={sialMpaPtilen}
        lhrMpaPlmn={lhrMpaPtilen}
        gujrMpaPlmn={gujrMpaPtilen}
        rawalMpaPlmn={rawalMpaPtilen}
        totalMpa={totalptimpa}
        loading={loading}
      />

      <ResultCard
        partyname="PLMN"
        no="2"
        image={shahbaz}
        pic={khawajaAif}
        sialkotVote={sialenPlmn}
        lahoreVote={lhrlenPlmn}
        rawalpindiVote={rawallenPlmn}
        gujVote={gujrlenPlmn}
        totalPlmn={totalPlmn}
        sialMpaPlm={sialMpaPlmnlen}
        lhrMpaPlmn={lhrMpaPlmnlen}
        gujrMpaPlmn={gujrMpaPlmnlen}
        rawalMpaPlmn={rawalMpaPlmnlen}
        totalMpa={totalmpa}
        loading={loading}
      />
      <ResultCard
        partyname="PPP"
        no="3"
        image={bilawal}
        pic={raza}
        sialkotVote={sialLenPpp}
        lahoreVote={lhrLenPpp}
        rawalpindiVote={rawalLenPpp}
        gujVote={gujrLenPpp}
        totalPlmn={totalppp}
        sialMpaPlm={sialMpaPpplen}
        lhrMpaPlmn={lhrMpaPpplen}
        gujrMpaPlmn={gujrMpaPpplen}
        rawalMpaPlmn={rawalMpaPpplen}
        totalMpa={totalpppmpa}
        loading={loading}
      />
      <ResultCard
        partyname="TLP"
        no="4"
        image={saad}
        pic={qari}
        sialkotVote={sialenTlp}
        lahoreVote={lhrlenTlp}
        rawalpindiVote={rawallenTlp}
        gujVote={gujrlenTlp}
        totalPlmn={totalTlp}
        sialMpaPlm={sialMpaTlplen}
        lhrMpaPlmn={lhrMpaTlplen}
        gujrMpaPlmn={gujraMpaTlplen}
        rawalMpaPlmn={rawalMpaTlplen}
        totalMpa={totalmpaTlp}
        loading={loading}
      />
      <Report mnaData={mnaData} mpaData={mpaData} />
    </div>
  );
};

export default Result;
