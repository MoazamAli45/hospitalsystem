import logo from "../../assets/logo.png";
function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <img src={logo} alt="logo" className="h-[70px]" />
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 | All rights reserved.
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            className="text-gray-500"
            href="https://www.facebook.com/bqfoundation?mibextid=ZbWKwL"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a
            className="ml-3 text-gray-500"
            href="https://x.com/BQFoundation?t=l4NRh_d_264nMexGbJuvNA&s=09"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
