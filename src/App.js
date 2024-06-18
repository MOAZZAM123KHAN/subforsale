import { Routes, Route, BrowserRouter } from "react-router-dom";
// import  Redirect  from 'react-router-dom';
import Navigation from "./customer/Components/navigation/Navigation";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ContactUs from "./pages/contactUs";
import AboutUs from "./pages/about";
import Forgot from "./pages/ForgotPassword";
import Footer from "./customer/Components/footer";
import Dashboard from "./pages/Dashboard";
import LinkDetails from "./pages/LinkDetails";
import PricingCards from "./customer/Components/PricingCards";
function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/forgotPassword" element={<Forgot />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/linkdetails" element={<LinkDetails />} />
        <Route path="/pricing" element={<PricingCards />} />
        {/* <Redirect/> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
