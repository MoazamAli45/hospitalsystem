import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useRef } from "react";
import {
  updateMe,
  updatePassword,
  getUser,
  reset,
} from "../../../store/authReducer";

import { Spinner } from "@nextui-org/react";

import "react-toastify/dist/ReactToastify.css";
import NotLoggedIn from "../NotLoggedIn/NotLoggedIn";

const departments = [
  { name: "Administration", value: "administration" },
  { name: "Pharmacy", value: "pharmacy" },
  { name: "Accounts", value: "accounts" },
  { name: "Dialysis", value: "dialysis" },
  { name: "Triage", value: "triage" },
  {
    name: "Laboratory",
    value: "laboratory",
  },
  { name: "In Patient Wards", value: "in patient wards" },
  { name: "Store", value: "store" },
  { name: "Energeny", value: "energeny" },
  { name: "Electrical", value: "electrical" },
  { name: "Plumbing", value: "plumbing" },
  { name: "General", value: "general" },
];
const Account = () => {
  const nameRef = useRef();
  const departmentRef = useRef();

  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const dispatch = useDispatch();
  const {
    user,
    error,
    updateProfile,
    updatePass,
    loadingProf,
    loadingPass,
    isAuth,
  } = useSelector((state) => state.auth);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      dispatch(getUser());
    }
    if (updateProfile) {
      toast.success("Profile Updated Successfully!");
    }
    if (updatePass) {
      toast.success("Password Updated Successfully!");
    }
    if (error) {
      toast.error(error);
    }

    return () => {
      toast.dismiss();
      setTimeout(() => {
        dispatch(reset());
      }, 3000);
    };
  }, [dispatch, error, updateProfile, updatePass]);

  // console.log(user);

  const updateMeHandler = () => {
    const name = nameRef.current.value;
    const department = departmentRef.current.value;

    const data = {
      name,
      department,
    };

    // console.log(data);
    dispatch(updateMe(data));
    dispatch(reset());

    nameRef.current.value = "";
    departmentRef.current.value = "";
  };

  const updatePasswordHandler = () => {
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    const data = {
      password,
      confirmPassword,
    };

    console.log(data);
    dispatch(updatePassword(data));
    dispatch(reset());

    passwordRef.current.value = "";
    confirmPasswordRef.current.value = "";
  };
  return isAuth ? (
    <div className="my-[3rem]">
      <ToastContainer position="top-center" autoClose={2000} />
      <h1 className="text-primary font-bold text-3xl">Your Account Settings</h1>
      <div className="flex flex-col gap-[1rem] my-[1rem]">
        <div className="flex flex-col md:flex-row gap-4 my-[1rem] ">
          <Input
            type="text"
            label="Name"
            // defaultValue={user?.name}
            defaultValue={user?.name}
            placeholder={user?.name}
            className="max-w-[30rem]"
            ref={nameRef}
          />
          <Select
            label="Department"
            placeholder="Select Department"
            className="max-w-[30rem]"
            textValue={user?.department}
            ref={departmentRef}
          >
            {departments.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.name}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div
          className="
        max-w-[20rem] justify-end self-end"
        >
          {!loadingProf && (
            <Button color="primary" className=" " onClick={updateMeHandler}>
              Update Settings
            </Button>
          )}
          {loadingProf && (
            <Button color="primary">
              <span className="flex items-center gap-[.5rem]">
                <Spinner color="white" size="sm" /> <span>Submitting ...</span>
              </span>
            </Button>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-[1rem] my-[2rem]">
        <div className="flex flex-col md:flex-row gap-4 my-[1rem] ">
          <Input
            type="password"
            label="Password"
            className="max-w-[30rem]"
            ref={passwordRef}
            placeholder="Enter New Password"
          />
          <Input
            type="password"
            label="Confrim Password"
            className="max-w-[30rem]"
            ref={confirmPasswordRef}
            placeholder="Confirm New Password"
          />
        </div>
        <div
          className="
        max-w-[20rem] justify-end self-end"
        >
          {!loadingPass && (
            <Button
              color="danger"
              className=" "
              onClick={updatePasswordHandler}
            >
              Update Password
            </Button>
          )}
          {loadingPass && (
            <Button color="danger">
              <span className="flex items-center gap-[.5rem]">
                <Spinner color="white" size="sm" /> <span>Submitting ...</span>
              </span>
            </Button>
          )}
        </div>
      </div>
    </div>
  ) : (
    <NotLoggedIn />
  );
};

export default Account;
