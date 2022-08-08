import React from "react";
import "./Party.css";
import ptilogo from "../../assets/img/ptilogo.png";
import plmn from "../../assets/img/plmn.png";
import tlp from "../../assets/img/tlp.png";
import ppp from "../../assets/img/ppp.png";
const Parties = () => {
  return (
    <div>
      <div className="party_heading">
        <span style={{ textAlign: "center" }}>
          Total <span style={{ fontSize: 48 }}>4</span> {"  "}Parties are
          Registerd for Election
        </span>
      </div>

      <div className="first_party">
        <div className="party_title">
          <div className="party_logo">
            <img src={ptilogo} alt="error" />
            <span>Imran Khan</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iusto
            corporis nostrum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Blanditiis, ut eveniet! Eos modi nulla, provident expedita
            distinctio id aut fuga natus illum illo dicta optio, architecto
            deserunt tenetur, quisquam quas!
          </p>
        </div>
      </div>
      <div className="second_party">
        <img src={plmn} alt="error" />
        <div className="party_title">
          <span>Shahbaz Sharif</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iusto
            corporis nostrum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Blanditiis, ut eveniet! Eos modi nulla, provident expedita
            distinctio id aut fuga natus illum illo dicta optio, architecto
            deserunt tenetur, quisquam quas!
          </p>
        </div>
      </div>
      <div className="third_party">
        <div className="party_title">
          <span>Asif Ali Zardari</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iusto
            corporis nostrum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Blanditiis, ut eveniet! Eos modi nulla, provident expedita
            distinctio id aut fuga natus illum illo dicta optio, architecto
            deserunt tenetur, quisquam quas!
          </p>
        </div>
      </div>
      <div className="forth_party">
        <div className="party_title">
          <span>Molana Saad Rizvi</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iusto
            corporis nostrum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Blanditiis, ut eveniet! Eos modi nulla, provident expedita
            distinctio id aut fuga natus illum illo dicta optio, architecto
            deserunt tenetur, quisquam quas!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Parties;
