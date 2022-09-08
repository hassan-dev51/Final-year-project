import React from "react";
import { Stack } from "@mui/material";

import ptilogo from "../../assets/img/ptilogo.png";
import shahbaz from "../../assets/img/shahbaz.jpg";
import asif from "../../assets/img/asif.jpg";
import saad from "../../assets/img/saad.jpg";
import imaran from "../../assets/img/imran.jpg";
import plmn from "../../assets/img/plmn.png";
import tlp from "../../assets/img/tlp.png";
import ppp from "../../assets/img/ppp.png";
import PartyCard from "./PartyCard";
import "./Party.css";

const Parties = () => {
  return (
    <div>
      <div className="party_heading">
        <span style={{ textAlign: "center" }}>
          Total <span style={{ fontSize: 48 }}>4</span> {"  "}Parties are
          Registerd for Election
        </span>
      </div>

      <Stack
        direction={{ sm: "column", md: "row", lg: "row" }}
        mb={5}
        mt={5}
        justifyContent="space-around"
      >
        <PartyCard
          logo={ptilogo}
          name="Imran Khan"
          pic={imaran}
          link={
            <a href="https://en.wikipedia.org/wiki/Tehreek-e-Labbaik_Pakistan">
              Learn More
            </a>
          }
          decs="The Pakistan Tehreek-e-Insaf is a centrist
              political party in Pakistan. It was founded in 1996 by the
              Pakistani cricketer-turned-politician Imran Khan."
        />
        <br />
        <PartyCard
          logo={plmn}
          name="Shahbaz Sharif"
          pic={shahbaz}
          link={
            <a href="https://en.wikipedia.org/wiki/Tehreek-e-Labbaik_Pakistan">
              Learn More
            </a>
          }
          decs=" The first Pakistan Muslim League was founded by President Ayub
              Khan in 1962 as a successor to the original Muslim League. Just a
              short period after its foundation, the party broke into two
              factions: Convention Muslim League that supported the President
              and the new Constitution, and the Council Muslim League, that
              opposed the new Constitution, denouncing it as undemocratic that
              made the Presidency an autocratic position."
        />
      </Stack>

      <Stack
        direction={{ sm: "column", md: "row", lg: "row" }}
        justifyContent="space-around"
        mb={5}
      >
        <PartyCard
          logo={ppp}
          name="Asif Ali Zardari"
          pic={asif}
          link={
            <a href="https://en.wikipedia.org/wiki/Pakistan_People%27s_Party">
              Learn More
            </a>
          }
          decs=" The Pakistan People's Party (Sindhi: پاڪستان پيپلز پارٽي, Urdu:
              پاکستان پیپلز پارٹی; abbr. PPP) is a centre-left,
              social-democratic political party in Pakistan. It is currently the
              third largest party in the National Assembly. The party was
              founded in 1967, when a number of prominent left-wing politicians
              in the country joined hands against the military dictatorship of
              President Ayub Khan, under the leadership of Zulfikar Ali Bhutto."
        />
        <br />
        <PartyCard
          logo={tlp}
          name="Molana Saad Rizvi"
          pic={saad}
          link={
            <a href="https://en.wikipedia.org/wiki/Tehreek-e-Labbaik_Pakistan">
              Learn More
            </a>
          }
          decs="Tehreek-e-Labbaik Pakistan (Urdu: تحریکِ لبیک پاکستان, lit.I am
              present Pakistan movement abbr. TLP) is a far-right Islamic
              extremist political party in Pakistan. The party was founded by
              Khadim Hussain Rizvi in August 2015. It became the fifth largest
              party at the 2018 Pakistani general election, but failed to win
              any seat in the National Assembly or the Punjab Assembly."
        />
      </Stack>
    </div>
  );
};

export default Parties;
