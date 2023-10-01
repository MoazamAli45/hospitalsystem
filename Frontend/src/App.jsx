import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";

import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Account from "./components/Account/Account";

import HodRoutes from "./components/Routes/HodRoutes";
import DirRoutes from "./components/Routes/DirRoutes";
import GsoRoutes from "./components/Routes/GsoRoutes";
import ProtectedRoutes from "./components/Routes/ProtectedRoutes";

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/me" element={<Account />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/*" element={<HodRoutes />} />
          <Route path="/GSO/*" element={<GsoRoutes />} />
          <Route path="/director/*" element={<DirRoutes />} />
        </Route>
        <Route path="*" element={<h1>Not Found !</h1>} />
      </Routes>
      <Footer />
    </Wrapper>
  );
}

export default App;
