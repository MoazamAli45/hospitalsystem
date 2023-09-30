import React from "react";
import { Route, Routes } from "react-router-dom";

import AllComplaints from "../AllComplaints/AllComplaints";
const DirRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/all-complaints" element={<AllComplaints />} />
      </Routes>
    </div>
  );
};

export default DirRoutes;
