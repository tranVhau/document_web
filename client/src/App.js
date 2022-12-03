import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/layouts/Layout";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import RankPage from "./pages/RankPage";
import DisplayDoc from "./pages/DisplayDoc";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/ReactToastify.min.css";

function App() {
  const [productList, setProductList] = useState([]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="*" element={<HomePage />} /> */}
        <Route path="/documents" element={<SearchPage />} />
        <Route path="/documents/:keyword" element={<SearchPage />} />
        <Route path="/documents/:keyword/:category" element={<SearchPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/popular" element={<RankPage />} />
        <Route path="/document/:id" element={<DisplayDoc />} />
        {/* <Route path="/login" element={<AuthPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
