import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/layouts/Layout";
import Home from "./pages/HomePage";

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
        />
        <Route
          path="/home"
          element={
            <div className="center">
              <Home />
            </div>
          }
        />

        <Route
          path="*"
          element={
            <div className="center">
              <Home />
            </div>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
