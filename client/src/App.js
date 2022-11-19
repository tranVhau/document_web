import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import productApi from "./api/productAPI";

import Layout from "./components/layouts/Layout";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import RankPage from "./pages/RankPage";
import DisplayDoc from "./pages/DisplayDoc";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };
        const response = await productApi.getAll(params);
        console.log(response);
        setProductList(response.data);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };

    fetchProductList();
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/cate/*" element={<SearchPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/popular" element={<RankPage />} />
        <Route path="/document" element={<DisplayDoc />} />
      </Route>
    </Routes>
  );
}

export default App;
