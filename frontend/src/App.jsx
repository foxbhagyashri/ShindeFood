import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import HeroSection from "./Components/HomePage/HeroSection";
import Footer from "./Components/Common/Fotter";
import CompanyIntro from "./Components/HomePage/Companyoverview";
import FeaturedProducts from "./Components/HomePage/Featured";
import AboutUs from "./Components/Page/AboutUs";
import Contactus from "./Components/Page/ContactUs";
import Recipies from "./Components/Page/Recipies";
import GetProducts from "./Components/Page/GetProducts";
import FoodServicesPage from "./Components/Page/FoodServices";
import Admin from "./Components/Page/Admin";
import Login from "./Components/Page/Login";
import MomosDetails from "./Components/Page/MomosDetails";
import ParathasDetails from "./Components/Page/ParathasDetails";
import FrozenVegetablesDetails from "./Components/Page/FrozenVegetablesDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <CompanyIntro />
              <FeaturedProducts />
            </>
          }
        />

        {/* About Page */}
        <Route path="/about" element={<AboutUs />} />
        
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/GetProducts/admin" element={<Admin />} />
        
        {/* Other Pages */}
        <Route path="/Recipies" element={<Recipies />} />
        <Route path="/GetProducts" element={<GetProducts />} />
        {/* Contact Page */}
        <Route path="/contact" element={<Contactus />} />
        <Route path="/foodservices" element={<FoodServicesPage />} />
        
        {/* Product Detail Pages */}
        <Route path="/momos-details" element={<MomosDetails />} />
        <Route path="/parathas-details" element={<ParathasDetails />} />
        <Route path="/frozen-vegetables-details" element={<FrozenVegetablesDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
