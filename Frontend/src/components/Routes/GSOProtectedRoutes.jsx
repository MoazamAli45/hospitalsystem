import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../../store/authReducer";
import { Spinner } from "@nextui-org/react";

const GSOProtectedRoutes = ({ role }) => {
  console.log(role);
  const { user } = useSelector((state) => state.auth);

  return user?.role === role ? (
    <Outlet />
  ) : (
    <h1
      className="font-bold text-lg text-gray-600
      text-center my-48"
    >
      You are not authorized to view this page
    </h1>
  );
};

export default GSOProtectedRoutes;
