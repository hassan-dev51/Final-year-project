import React from "react";
import { ScaleLoader } from "react-spinners";
const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
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
  loading,
}) => {
  return (
    <div className="reult">
      <h4 style={{ textAlign: "center", letterSpacing: 5, fontSize: "2rem" }}>
        ({no}) {partyname}
      </h4>
      {loading ? (
        <ScaleLoader
          color="#9c69e2"
          cssOverride={override}
          height={50}
          margin={7}
          speedMultiplier={1}
          width={4}
        />
      ) : (
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
              Sialkot <br />
              <span>NA-1</span>
            </h2>
            {sialkotVote}
          </div>
          <div className="p-text" style={{ marginTop: 10 }}>
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              Rawalpindi <br />
              <span>NA-2</span>
            </h2>
            {rawalpindiVote}
          </div>
          <div className="p-text" style={{ marginTop: 10 }}>
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              Gujranwala <br />
              <span>NA-3</span>
            </h2>
            {gujVote}
          </div>
          <div className="p-text" style={{ marginTop: 10 }}>
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              Lahore <br />
              <span>NA-4</span>
            </h2>
            {lahoreVote}
          </div>
        </div>
      )}
      {loading ? (
        <ScaleLoader
          color="#9c69e2"
          cssOverride={override}
          height={50}
          margin={7}
          speedMultiplier={1}
          width={4}
        />
      ) : (
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
              Sialkot <br />
              <span>NA-1</span>
            </h2>
            {sialMpaPlm}
          </div>

          <div className="p-text" style={{ marginTop: 10 }}>
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              Rawalpindi <br />
              <span>NA-2</span>
            </h2>
            {rawalMpaPlmn}
          </div>
          <div className="p-text" style={{ marginTop: 10 }}>
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              Gujranwala <br />
              <span>NA-3</span>
            </h2>
            {gujrMpaPlmn}
          </div>
          <div className="p-text" style={{ marginTop: 10 }}>
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              Lahore <br />
              <span>NA-4</span>
            </h2>
            {lhrMpaPlmn}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultCard;
