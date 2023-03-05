import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import BodyContainer from "./BodyContainer";
import NavBar from "./NavBar";
import NFTBodyContainer from "./NFTBodyContainer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<BodyContainer />} />
        <Route path="/nftMain" element={<NFTBodyContainer />} />
      </Routes>
    </>
  );
}

export default App;
