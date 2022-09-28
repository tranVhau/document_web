import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/layouts/Layout";
import Home from "./pages/HomePage";
import Test from "./components/test/Test";

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <div className="center">
              <Home />
            </div>
          }
        ></Route>

        <Route
          path="/home"
          element={
            <div className="center">
              <Home />
            </div>
          }
        ></Route>

        <Route
          path="/test"
          element={
            <div className="center">
              <Test />
            </div>
          }
        ></Route>
      </Routes>
    </Layout>
  );
}

export default App;
