import { Route, Routes } from "react-router-dom";
import AllocateComplaints from "../AllocateComplaints/AllocateComplaints";
import AllComplaints from "../AllComplaints/AllComplaints";
import ShowComplaint from "../ShowComplaint/ShowComplaint";
import AllAllocatedComplaints from "../AllAllocatedComplaints/AllAllocatedComplaints";
import GSOProtectedRoutes from "./GSOProtectedRoutes";

const GsoRoutes = () => {
  return (
    <Routes>
      <Route element={<GSOProtectedRoutes role="GSO" />}>
        <Route path="/allocate-complaints" element={<AllocateComplaints />} />
        <Route
          path="/allocated-complaints"
          element={<AllAllocatedComplaints />}
        />
        <Route path="/all-complaints" element={<AllComplaints />} />
        <Route path="/:id" element={<ShowComplaint />} />
      </Route>
    </Routes>
  );
};

export default GsoRoutes;
