import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

import Verification from "./components/Verification/Verification";
import NoMatch from "./components/screen/NoMatch";

const Home = React.lazy(() => import("./components/Home/Home"));
const Login = React.lazy(() => import("./components/Login/Login"));
const Parties = React.lazy(() => import("./components/Party/Parties"));
const SignIn = React.lazy(() => import("./components/SignIn/SignIn"));
const Candidate = React.lazy(() => import("./components/Candidates/Candidate"));
const Result = React.lazy(() => import("./components/Result/Result"));
const OnBording = React.lazy(() => import("./components/screen/OnBording"));
const MpaList = React.lazy(() => import("./components/MNA/MpaList"));
const MnaList = React.lazy(() => import("./components/MNA/MnaList"));
const CastVote = React.lazy(() => import("./components/MNA/CastVote"));
const MpaCastVote = React.lazy(() => import("./components/MNA/MpaCastVote"));
const Logout = React.lazy(() => import("./components/LogOut/Logout"));
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
          <Route
            path="candidate"
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
                <Candidate />
              </Suspense>
            }
          />
          <Route
            path="result"
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
                <Result />
              </Suspense>
            }
          />

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

          <Route
            path="signin"
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
                <SignIn />
              </Suspense>
            }
          />

          <Route
            path="parties"
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
                <Parties />
              </Suspense>
            }
          />
          <Route
            path="/onbording"
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
                <OnBording />
              </Suspense>
            }
          />
          <Route
            path="/logout"
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
                <Logout />
              </Suspense>
            }
          />
          <Route
            path="onbording/mna"
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
                <MnaList />
              </Suspense>
            }
          />
          <Route
            path="onbording/mna/:id"
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
                <CastVote />
              </Suspense>
            }
          />
          <Route
            path="onbording/mpa"
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
                <MpaList />
              </Suspense>
            }
          />
          <Route
            path="onbording/mpa/:id"
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
                <MpaCastVote />
              </Suspense>
            }
          />
          <Route path="verify" element={<Verification />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
