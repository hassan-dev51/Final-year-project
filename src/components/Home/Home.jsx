import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import Vote from "../Vote/Vote";
import "./Home.css";
const Home = () => {
  const [toogle, setToogle] = useState(false);
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <div className="logo_circle"></div>
          <div className="logo_rect"></div>
        </div>
        <div className="nav_bar">
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="candidate">Candidates</Link>
              </li>
              <li>
                <Link to="parties">Parties</Link>
              </li>
              <li>
                <Link to="result">Results</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="vote_btn">
          <Link to="login">
            <button className="btn">
              Cast Vote <AiOutlineArrowRight />
            </button>
          </Link>
        </div>

        <div className="nav_menu">
          <HiMenu onClick={() => setToogle(true)} />
          {toogle && (
            <div className="menu_div">
              <HiX
                onClick={() => {
                  setToogle(false);
                }}
              />
              <ul>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      setToogle(false);
                    }}
                  >
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="candidate"
                    onClick={() => {
                      setToogle(false);
                    }}
                  >
                    Candidates
                  </Link>
                </li>
                <li>
                  <Link
                    to="parties"
                    onClick={() => {
                      setToogle(false);
                    }}
                  >
                    Parties
                  </Link>
                </li>
                <li>
                  <Link
                    to="result"
                    onClick={() => {
                      setToogle(false);
                    }}
                  >
                    Results
                  </Link>
                </li>
                <div className="menu_btn">
                  <Link to="login">
                    <button className="btn">
                      Cast Vote <AiOutlineArrowRight />
                    </button>
                  </Link>
                </div>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="hero">
        <div className="hero_right">
          <div className="hero_heading">
            <h1>
              save your time
              <br /> for casting vote
            </h1>
          </div>
          <div className="hero_para">
            <p>
              Let's take Pakistan forward and fill it together. Clear and
              transparent voting system. Create your account and cast your
              valueable vote..
            </p>
          </div>

          <div className="vote_btn hero_btn">
            <Link to="/signin">
              <button className="btn">
                Create Vote <AiOutlineArrowRight />
              </button>
            </Link>
          </div>
        </div>
        <div className="hero_image">
          <div className="image"></div>
        </div>
      </div>
      <Vote />
    </div>
  );
};

export default Home;
