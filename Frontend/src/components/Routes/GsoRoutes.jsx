import React from "react";
import { Route, Routes } from "react-router-dom";
import AllocateComplaints from "../AllocateComplaints/AllocateComplaints";
import AllComplaints from "../AllComplaints/AllComplaints";
const GsoRoutes = () => {
  return (
    <Routes>
      <Route path="/allocate-complaints" element={<AllocateComplaints />} />
      <Route path="/all-complaints" element={<AllComplaints />} />
    </Routes>
  );
};

export default GsoRoutes;
