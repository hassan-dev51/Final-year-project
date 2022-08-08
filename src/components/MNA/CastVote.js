import React from "react";
import { useParams } from "react-router-dom";

import Rows from "../../constants/Row";

const CastVote = () => {
  const { id } = useParams();
  console.log("====================================");
  console.log(id);
  console.log("====================================");
  const found = Rows.filter((obj) => {
    return obj.id === id;
  });
  console.log(found);
  return (
    <div>
      <h1>
        heelo{" "}
        {found.map((item) => (
          <h2>{item.name}</h2>
        ))}
      </h1>
    </div>
  );
};

export default CastVote;
{
  /* <div className="mna_list" key={ind}>
<div className="main_list_div">
  <div className="mna_list_image">
    <img src={item[id].image} alt="error" />
  </div>
  <div className="mna_list_titles">
    <h3 style={{ marginLeft: 32 }}>{item[id].name}</h3>
    <div className="mna_list_titles_img">
      <img src={item[id].logo} alt="error" />
      <span></span>
      <div className="city">
        <span>{item[id].city}</span>
      </div>
    </div>
  </div>
  <div className="mna_list_button">
    <span></span>

    <button>Cast Vote</button>
  </div>
</div>
</div> */
}
