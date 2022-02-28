/*
* @Author: Gilang
* @Date:   2022-02-27 22:21:16
* @Last Modified by:   Gilang
* @Last Modified time: 2022-02-28 00:27:47
*/

import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import HomeGrid from "./HomeGrid";
import SearchAppBar from "./components/AppBar";
import DetailPage from "./components/PageDetail/DetailPage";

const App = () => {
  return (
    <>
      <CssBaseline />
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<HomeGrid />} />
        <Route path="/page-detail/:path/:id" element={<DetailPage />} />
      </Routes>
    </>
  );
};

export default App;