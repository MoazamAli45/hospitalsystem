import { Button } from "@nextui-org/react";
import home from "../../assets/hospital.jpg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Hero() {
  const navigate = useNavigate();
  const { isAuth, user } = useSelector((state) => state.auth);

  return (
    <div className="bg-var(--softBg)">
      {" "}
      {/* Use CSS variable for background color */}
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-16 lg:px-8">
        <div className="bg-var(--softBg) relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-var(--textColor)  text-3xl font-bold tracking-tight sm:text-4xl">
              {" "}
              {/* Use CSS variable for text color */}
              Welcome!
            </h2>
            <br />
            <h2 className="text-gray-500  text-2xl font-bold tracking-tight sm:text-3xl">
              Start using our app today.
            </h2>
            {/* <p className="text-var(--softTextColor) mt-6 text-lg leading-8">
              {" "}
              {/* Use CSS variable for soft text color */}
            {/* Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla.
            </p>  */}
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              {!isAuth && (
                <Button
                  color="primary"
                  className="px-20 py-5 text-base font-medium rounded-full"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              )}
              {user?.role === "GSO" && (
                <Button
                  color="primary"
                  className="px-20 py-5 text-base font-medium rounded-full"
                  onClick={() => navigate("/gso/allocate-complaints")}
                >
                  Allocate Complaints
                </Button>
              )}
              {user?.role === "DIR" && (
                <Button
                  color="primary"
                  className="px-20 py-5 text-base font-medium rounded-full"
                  onClick={() => navigate("/director/all-complaints")}
                >
                  All Complaints
                </Button>
              )}
              {user?.role === "DEP" && (
                <div className="flex  flex-col sm:flex-row gap-[2rem]">
                  <Button
                    color="primary"
                    className="px-7 py-5 text-base font-medium rounded-full"
                    onClick={() => navigate("/register-complaint")}
                  >
                    Register Complaint
                  </Button>
                  <Button
                    color="primary"
                    className="px-7 py-5 text-base font-medium rounded-full"
                    onClick={() => navigate("/view-complaint")}
                  >
                    View Complaint
                  </Button>
                </div>
              )}
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="bg-var(--softBg)/5 absolute left-0 top-0 w-[57rem] max-w-none rounded-md object-right-bottom object-cover"
              src={home}
              alt="Home"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
