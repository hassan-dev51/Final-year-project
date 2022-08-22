import React from "react";
import imran from "../../assets/img/imran.jpg";
import usman from "../../assets/img/aliafzal.png";
const ResultCard = ({
  image,
  partyname,
  no,
  pic,
  sialkotVote,
  lahoreVote,
  totalPlmn,
  rawalpindiVote,
  gujVote,
  sialMpaPlm,
  totalMpa,
  lhrMpaPlmn,
  gujrMpaPlmn,
  rawalMpaPlmn,
}) => {
  return (
    <div className="reult">
      <h4 style={{ textAlign: "center", letterSpacing: 5, fontSize: "2rem" }}>
        ({no}) {partyname}
      </h4>
      <div className="result_winner">
        <img src={image} alt="about" />
        <div className="p-text" style={{ marginTop: 10 }}>
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            MNA Votes
          </h2>
          {totalPlmn}
        </div>
        <div className="p-text" style={{ marginTop: 10 }}>
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            Sialkot
          </h2>
          {sialkotVote}
        </div>
        <div className="p-text" style={{ marginTop: 10 }}>
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            Lahore
          </h2>
          {lahoreVote}
        </div>
        <div className="p-text" style={{ marginTop: 10 }}>
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            Rawalpindi
          </h2>
          {rawalpindiVote}
        </div>
        <div className="p-text" style={{ marginTop: 10 }}>
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            Gujranwala
          </h2>
          {gujVote}
        </div>
      </div>{" "}
      <div className="result_winner">
        <img src={pic} alt="about" />
        <div className="p-text" style={{ marginTop: 10 }}>
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            MPA Votes
          </h2>
          {totalMpa}
        </div>
        <div className="p-text" style={{ marginTop: 10 }}>
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            Sialkot
          </h2>
          {sialMpaPlm}
        </div>
        <div className="p-text" style={{ marginTop: 10 }}>
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            Lahore
          </h2>
          {lhrMpaPlmn}
        </div>
        <div className="p-text" style={{ marginTop: 10 }}>
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            Rawalpindi
          </h2>
          {rawalMpaPlmn}
        </div>
        <div className="p-text" style={{ marginTop: 10 }}>
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            Gujranwala
          </h2>
          {gujrMpaPlmn}
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
