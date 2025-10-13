import React from "react";
import BaseLayout from "../layout/BaseLayout";
import Headers from "../headers/Headers";
import HeroSection from "../heroSection/HeroSection";
import "../pages/Homepage.css";

const Homepage = () => {
  return (
    <>
      <div className="wallpaper">
        <BaseLayout>
          <HeroSection />
        </BaseLayout>
      </div>
    </>
  );
};

export default Homepage;
