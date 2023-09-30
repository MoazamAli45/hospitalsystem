import { Input, Button } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { login } from "../../../store/authReducer";
import { Spinner } from "@nextui-org/react";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const nameRef = useRef();
  const passwordRef = useRef();
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
      // dispatch(reset());
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

    const data = {
      name,
      password,
    };

    // console.log(data);
    dispatch(login(data));

    nameRef.current.value = "";
    passwordRef.current.value = "";
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
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" method="POST" onSubmit={submitHandler}>
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

            <div>
              <Button
                type="submit"
                className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                color="primary"
              >
                {!isLoading && "Sign in"}
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
            If Your are not Regsitered{" "}
            <Link
              to="/signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
