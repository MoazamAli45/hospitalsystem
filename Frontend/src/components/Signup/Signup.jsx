import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { signup } from "../../../store/authReducer";
import { Spinner } from "@nextui-org/react";
import "react-toastify/dist/ReactToastify.css";
//  Departments
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

export default function Signup() {
  const nameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const departmentRef = useRef();

  const navigate = useNavigate();
  //  redux toolkit

  const dispatch = useDispatch();
  const { isLoading, error, isAuth, user } = useSelector((state) => state.auth);
  useEffect(() => {
    //   is Success
    if (isAuth && user) {
      toast.success("Logged In Successfully!");
      setTimeout(() => {
        navigate("/");
      }, 3000);
      //  dispatch(reset());
    }

    if (error) {
      toast.error(error);
    }

    //  cleanup
    return () => {
      toast.dismiss();
    };
  }, [isAuth, user, dispatch, navigate, error]);

  const submitHandler = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    const dep = departmentRef.current.value;
    const department = departments[dep].value;
    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }
    const data = {
      name,
      password,
      department,
      confirmPassword,
    };

    // console.log(data);
    dispatch(signup(data));

    nameRef.current.value = "";
    passwordRef.current.value = "";
    confirmPasswordRef.current.value = "";
    departmentRef.current.value = "";
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <ToastContainer position="top-center" autoClose={2000} />
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex justify-center">
            <RiAccountCircleFill className="text-primary text-[8rem]" />
          </div>
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" method="POST " onSubmit={submitHandler}>
            <Input
              isRequired
              type="text"
              label="Name"
              placeholder="Enter Your Name"
              size="lg"
              ref={nameRef}
              // className="max-w-xs"
            />

            <div className="mt-2">
              <Input
                isRequired
                type="password"
                label="Password"
                placeholder="Enter Your Password"
                size="lg"
                ref={passwordRef}
                // className="max-w-xs"
              />
            </div>
            <div className="mt-2">
              <Input
                isRequired
                type="password"
                label="Confirm Password"
                placeholder="Enter Your Confirm Password"
                size="lg"
                ref={confirmPasswordRef}
                // className="max-w-xs"
              />
              <p className="mt-2 text-sm text-red-500 mx-2">
                Password must be at least 8 characters long.
              </p>
            </div>
            <div className="flex justify-end">
              <Select
                label="Department"
                placeholder="Select Your Department"
                className="max-w-xs"
                ref={departmentRef}
              >
                {departments.map((dept, id) => (
                  <SelectItem key={id} value={dept.value}>
                    {dept.name}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div>
              <Button
                type="submit"
                className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                color="primary"
              >
                {!isLoading && "Sign Up"}
                {isLoading && (
                  <span className="flex  items-center gap-[.5rem]">
                    <Spinner color="white" size="sm" />
                    <span>Submitting...</span>
                  </span>
                )}
              </Button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            If You are already Regsitered{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
