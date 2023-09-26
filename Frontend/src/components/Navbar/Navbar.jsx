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

//   For url Path
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const path = location.pathname;

  //  For navigate
  const navigate = useNavigate();

  const isAuth = true;

  const menuItems = [
    { name: "Register Complaints", link: "/register-complaint" },
    { name: "View Complaints", link: "/view-complaint" },
    { name: "Completed Jobs", link: "/completed-jobs" },
    { name: "Login", link: "/login" },
  ];

  return (
    <NextNavbar onMenuOpenChange={setIsMenuOpen} className="bg-transparent">
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
          <Link
            color={`${path !== "/register-complaint" ? "foreground" : ""}`}
            href="/register-complaint"
          >
            Register Complaint
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/view-complaint"
            aria-current="page"
            color={`${path !== "/view-complaint" ? "foreground" : ""}`}
          >
            View Complaints
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color={`${path !== "/completed-jobs" ? "foreground" : ""}`}
            href="/completed-jobs"
          >
            Completed Jobs
          </Link>
        </NavbarItem>
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
                  name="JS"
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
                  <p className="font-semibold">Head of Department</p>
                </DropdownItem>
                <DropdownItem key="settings" onClick={() => navigate("/me")}>
                  My Account
                </DropdownItem>

                <DropdownItem key="logout" color="danger">
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
