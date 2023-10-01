import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../../store/authReducer";
import { Spinner } from "@nextui-org/react";
import NotLoggedIn from "../NotLoggedIn/NotLoggedIn";

const ProtectedRoutes = () => {
  const { isAuth, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      dispatch(getUser());
    }
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex justify-center align-center h-[90vh]">
        <Spinner color="primary" className="w-8rem h-[8rem]" />
      </div>
    );
  }

  return isAuth ? <Outlet /> : <NotLoggedIn />;
};

export default ProtectedRoutes;
