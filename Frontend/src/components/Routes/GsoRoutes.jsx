import React from "react";
import { Route, Routes } from "react-router-dom";
import AllocateComplaints from "../AllocateComplaints/AllocateComplaints";
import AllComplaints from "../AllComplaints/AllComplaints";
import ShowComplaint from "../ShowComplaint/ShowComplaint";
const GsoRoutes = () => {
  return (
    <Routes>
      <Route path="/allocate-complaints" element={<AllocateComplaints />} />
      <Route path="/all-complaints" element={<AllComplaints />} />
      <Route path="/:id" element={<ShowComplaint />} />
    </Routes>
  );
};

export default GsoRoutes;
