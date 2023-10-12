import { Route, Routes } from "react-router-dom";

import AllComplaints from "../AllComplaints/AllComplaints";
import ShowComplaint from "../ShowComplaint/ShowComplaint";
import GSOProtectedRoutes from "./GSOProtectedRoutes";
const DirRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<GSOProtectedRoutes role="DIR" />}>
          <Route path="/all-complaints" element={<AllComplaints />} />
          <Route path="/:id" element={<ShowComplaint />} />
        </Route>
      </Routes>
    </div>
  );
};

export default DirRoutes;
