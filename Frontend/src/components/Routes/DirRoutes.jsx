import { Route, Routes } from "react-router-dom";

import AllComplaints from "../AllComplaints/AllComplaints";
import ShowComplaint from "../ShowComplaint/ShowComplaint";
const DirRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/all-complaints" element={<AllComplaints />} />
        <Route path="/:id" element={<ShowComplaint />} />
      </Routes>
    </div>
  );
};

export default DirRoutes;
