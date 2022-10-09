import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/layouts/Layout";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/cate/*" element={<SearchPage />} />
        <Route path="/categories" element={<CategoryPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
