import React from "react";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import DaisyHeader from "../Header/DaisyHeader";

const Root = () => {
  return (
    <div>
      <DaisyHeader></DaisyHeader>
      <div className="container mx-auto py-3.5">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
