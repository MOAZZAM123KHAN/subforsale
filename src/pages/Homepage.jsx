import React from "react";
import Dashboard from "./Dashboard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PricingCards from "../customer/Components/PricingCards";
import SuccessAlerts from "../customer/Components/SuccessAlerts";
import ErrorAlerts from "../customer/Components/ErrorAlerts";
import Blog from "../customer/Components/Blog";
/// If LOGIN is done and user clicks on Home , then it should navigate to dashboard
const Homepage = () => {
  const loginStatus = useSelector((state) => state.user.loginStatus);
  return (
    <>
      <div className="w-screen h-[calc(100vh-5rem)]">
        <div className="bg-cover bg-[url('/public/hero.jpg')] bg-center bg-no-repeat h-full w-full">
          <div className="container mx-auto flex flex-col justify-center items-start h-full">
            <div className="my-auto w-10/12 lg:w-2/5 ml-8">
              <h1 className="text-7xl mb-3 text-violet-500">
                Welcome To Sub4Sale
              </h1>
              <p className="text-2xl mb-8">
                Welcome to Sub4Sale, where unity thrives and collaboration feels
                like family. As a nonprofit association, we're honored that
                you've entrusted us with your financial journey.
              </p>
              <div className="mt-4 flex justify-center gap-3">
                {" "}
                {/* Added mt-4 for top margin */}
                {loginStatus === false ? (
                  <Link
                    className="rounded-full px-8 py-3 text-white bg-violet-500 hover:bg-violet-600"
                    to="/login"
                  >
                    Sign In
                  </Link>
                ) : (
                  ""
                )}
                {loginStatus === false ? (
                  <Link
                    className="rounded-full px-8 py-3 text-white bg-violet-500 hover:bg-violet-600"
                    href="/signUp"
                  >
                    Register
                  </Link>
                  // <Link
                  //   className={`bg-[#00df9a] hover:text-[#00df9a] hover:bg-gray-50 duration-150 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3`}
                  //   href="/signUp"
                  // >
                  //   Register
                  // </Link>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <PricingCards />
      <Blog />
    </>
  );
};

export default Homepage;
