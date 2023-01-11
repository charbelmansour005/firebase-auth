import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginSignIn from "./pages/LoginSignIn";
import CreateUser from "./pages/CreateUser";
import AxiosData from "./AxiosData";
import Modal from "./components/Modal";
import Subs from "./pages/Subs";
import AdviceSub from "./pages/AdviceSub";
function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginSignIn />} />
        <Route exact path="/encxloginencx-success" element={<Dashboard />} />
        <Route exact path="/signup" element={<CreateUser />} />
        <Route exact path="/axiosdata" element={<AxiosData />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/subs" element={<Subs />} />
        <Route path="/advice" element={<AdviceSub />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
