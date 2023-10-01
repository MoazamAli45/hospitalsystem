import React from "react";

import {
  Navbar as NextNavbar,
  NavbarMenu,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenuItem,
  Link,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Avatar,
} from "@nextui-org/react";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser, logout } from "../../../store/authReducer";
import { useEffect } from "react";
//   For url Path
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Navbar() {
  const { user, isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      dispatch(getUser());
    }

    // }
  }, [dispatch]);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const path = location.pathname;

  //  For navigate
  const navigate = useNavigate();
  let menuItems = [];
  if (user?.role === "DEP")
    menuItems = [
      { name: "Register Complaints", link: "/register-complaint" },
      { name: "View Complaints", link: "/view-complaint" },
      { name: "Completed Jobs", link: "/completed-jobs" },
    ];

  if (user?.role === "GSO")
    menuItems = [
      { name: "Allocate Complaints", link: "/gso/allocate-complaints" },
    ];

  if (user?.role === "DIR")
    menuItems = [{ name: "All Complaints", link: "/director/all-complaints" }];

  const logoutHandler = () => {
    dispatch(logout()).then(() => {
      toast.success("Logged Out Successfully!");
    });
    navigate("/");
  };
  console.log(path);
  return (
    <NextNavbar onMenuOpenChange={setIsMenuOpen} className="bg-transparent">
      <ToastContainer position="top-center" autoClose={2000} />
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img src={logo} alt="hospital logo" className="h-[80px]" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          {user?.role === "DEP" && (
            <Link
              color={`${path !== "/register-complaint" ? "foreground" : ""}`}
              href="/register-complaint"
            >
              Register Complaint
            </Link>
          )}
        </NavbarItem>
        <NavbarItem>
          {user?.role === "DEP" && (
            <Link
              href="/view-complaint"
              aria-current="page"
              color={`${path !== "/view-complaint" ? "foreground" : ""}`}
            >
              View Complaints
            </Link>
          )}
        </NavbarItem>
        {user?.role === "DEP" && (
          <NavbarItem>
            <Link
              color={`${path !== "/completed-jobs" ? "foreground" : ""}`}
              href="/completed-jobs"
            >
              Completed Jobs
            </Link>
          </NavbarItem>
        )}

        {user?.role === "GSO" && (
          <NavbarItem>
            <Link
              color={`${
                path !== "/gso/allocate-complaints" ? "foreground" : ""
              }`}
              href="/gso/allocate-complaints"
            >
              Allocate Complaints
            </Link>
          </NavbarItem>
        )}
        {user?.role === "DIR" && (
          <NavbarItem>
            <Link
              color={`${
                path !== "/director/all-complaints" ? "foreground" : ""
              }`}
              href="/director/all-complaints"
            >
              All Complaints
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>
      <NavbarContent justify="end">
        {!isAuth && (
          <NavbarItem className="hidden lg:flex">
            <Link href="/login">Login</Link>
          </NavbarItem>
        )}
        {!isAuth && (
          <NavbarItem>
            <Button as={Link} color="primary" href="/signup" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        )}
        {isAuth && (
          <NavbarItem as="div" justify="end">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  as="button"
                  className="transition-transform text-white text-[1.2rem] text-center"
                  name={user?.name[0].toUpperCase()}
                  color="primary"
                  size="md"
                  // icon={
                  //   <RiAccountCircleFill
                  //     color="primary"
                  //     className="w-[50px] h-[50px]"
                  //   />
                  // }
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">
                    {user.role === "DEP" && "HOD"}
                    {user.role === "GSO" && "GSO"}
                    {user.role === "DIR" && "Director"}
                  </p>
                </DropdownItem>
                <DropdownItem key="settings" onClick={() => navigate("/me")}>
                  My Account
                </DropdownItem>

                <DropdownItem
                  key="logout"
                  color="danger"
                  onClick={logoutHandler}
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        )}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              color={path === item.link ? "primary" : "foreground"}
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextNavbar>
  );
}
