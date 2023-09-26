import { Input, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";
export default function Login() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex justify-center">
            <RiAccountCircleFill className="text-primary text-[8rem]" />
          </div>
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" method="POST">
            <Input
              isRequired
              type="text"
              label="Name"
              placeholder="Enter Your Name"
              size="lg"
              // className="max-w-xs"
            />

            <div className="mt-2">
              <Input
                isRequired
                type="password"
                label="Password"
                placeholder="Enter Your Password"
                size="lg"
                // className="max-w-xs"
              />
            </div>

            <div>
              <Button
                type="submit"
                className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                color="primary"
              >
                Sign in
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
