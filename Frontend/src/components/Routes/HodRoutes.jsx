import React from "react";
import { Route, Routes } from "react-router-dom";
import RegisterComplaint from "../RegisterComplaint/RegisterComplaint";
import ViewInProgressComplaint from "../ViewInProgressComplaint/ViewInProgressComplaint";
import CompletedJobs from "../CompletedJobs/CompletedJobs";

const HodRoutes = () => {
  return (
    <Routes>
      <Route path="/register-complaint" element={<RegisterComplaint />} />
      <Route path="/job-orders" element={<ViewInProgressComplaint />} />
      <Route path="/completed-jobs" element={<CompletedJobs />} />
    </Routes>
  );
};

export default HodRoutes;
