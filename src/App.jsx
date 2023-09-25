import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";

import "./App.css";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import RegisterComplaint from "./components/RegisterComplaint/RegisterComplaint";
import ViewInProgressComplaint from "./components/ViewInProgressComplaint/ViewInProgressComplaint";
import CompletedJobs from "./components/CompletedJobs/CompletedJobs";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/register-complaint" element={<RegisterComplaint />} />
        <Route path="/view-complaint" element={<ViewInProgressComplaint />} />
        <Route path="/completed-jobs" element={<CompletedJobs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
}

export default App;
