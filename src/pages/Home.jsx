import React from "react";
import Banner from "../components/Banner";
import BannerReverse from "../components/BannerReverse";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import ProudProducts from "../components/ProudProducts";
import TrendingSlider from "../components/TrendingSlider";
import Banner1 from "../img/banner/banner2.png";
import Banner2 from "../img/banner/banner1.png";

function Home() {
  return (
    <>
      <div className="parallax">
        <div style={{ zIndex: 2, position: "relative" }}>
          <Hero />
        </div>
      </div>
      <ProudProducts />
      <div className="parallax-banner">
        <div style={{ zIndex: 2, position: "relative" }}>
          <Banner
            title="Creative unique pieces"
            text=" Fujisan's eco-friendly clothing line is crafted with consistent sizing, allowing you to effortlessly combine and coordinate pieces."
            img={Banner1}
          />
        </div>
      </div>
      <TrendingSlider />
      <BannerReverse
        title="Comfortable & Stylish Clothing"
        text=" Experience unparalleled comfort with Fujisan's clothing collection, designed to provide a soft and soothing feel for everyday wear."
        img={Banner2}
      />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
