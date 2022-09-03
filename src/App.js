import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

// import Home from "./components/Home/Home";
import Candidate from "./components/Candidates/Candidate";
import Result from "./components/Result/Result";
// import Login from "./components/Login/Login";
import Verification from "./components/Verification/Verification";
import OnBording from "./components/screen/OnBording";
import MnaList from "./components/MNA/MnaList";
import NoMatch from "./components/screen/NoMatch";
import Parties from "./components/MNA/Parties";
import MpaList from "./components/MNA/MpaList";
import CastVote from "./components/MNA/CastVote";
import SignIn from "./components/SignIn/SignIn";
import MpaCastVote from "./components/MNA/MpaCastVote";

const Home = React.lazy(() => import("./components/Home/Home"));
const Login = React.lazy(() => import("./components/Login/Login"));
const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense
                fallback={
                  <ScaleLoader
                    color="#9c69e2"
                    cssOverride={override}
                    height={50}
                    margin={7}
                    speedMultiplier={1}
                    width={4}
                  />
                }
              >
                <Home />
              </Suspense>
            }
          />
          <Route path="candidate" element={<Candidate />} />
          <Route path="result" element={<Result />} />

          <Route
            path="login"
            element={
              <Suspense
                fallback={
                  <ScaleLoader
                    color="#9c69e2"
                    cssOverride={override}
                    height={50}
                    margin={7}
                    speedMultiplier={1}
                    width={4}
                  />
                }
              >
                <Login />
              </Suspense>
            }
          />

          <Route path="signin" element={<SignIn />} />
          <Route path="verify" element={<Verification />} />
          <Route path="onbording" element={<OnBording />} />
          <Route path="onbording/mna" element={<MnaList />} />
          <Route path="onbording/mna/:id" element={<CastVote />} />
          <Route path="onbording/parties" element={<Parties />} />
          <Route path="onbording/mpa" element={<MpaList />} />
          <Route path="onbording/mpa/:id" element={<MpaCastVote />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
