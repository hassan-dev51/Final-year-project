import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Candidate from "./components/Candidates/Candidate";
import Result from "./components/Result/Result";
import Login from "./components/Login/Login";
import Verification from "./components/Verification/Verification";
import OnBording from "./components/screen/OnBording";
import MnaList from "./components/MNA/MnaList";
import NoMatch from "./components/screen/NoMatch";
import Parties from "./components/MNA/Parties";
import MpaList from "./components/MNA/MpaList";
import CastVote from "./components/MNA/CastVote";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="candidate" element={<Candidate />} />
          <Route path="result" element={<Result />} />
          <Route path="login" element={<Login />} />
          <Route path="verify" element={<Verification />} />
          <Route path="onbording" element={<OnBording />} />
          <Route path="onbording/mna" element={<MnaList />} />
          <Route path="onbording/mna/:id" element={<CastVote />} />
          <Route path="onbording/parties" element={<Parties />} />
          <Route path="onbording/mpa" element={<MpaList />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
