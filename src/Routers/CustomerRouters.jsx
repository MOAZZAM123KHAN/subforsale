import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const CustomerRouters = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element="{<Homepage/>}"/>
          <Route path="/login" element="{<Login/>}"/>
          <Route path="/signUp" element="{<SignUp/>}"/>
          <Route path="/contactUs" element="{<contactUs/>}"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default CustomerRouters;
