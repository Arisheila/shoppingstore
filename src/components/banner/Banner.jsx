/** @format */

import shoplogo from "./shoplogo.png";
import arrow from "./bannerArrow.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="home flex items-center justify-center flex-col gap-6 h-[316px]">
        <div>
          <img src={shoplogo} alt="shop-logo" className="banner-content-icon" />
        </div>
        <h3 className="banner-content-title font-bold text-xl" style={{ color: "black", fontWeight: "bold" }}>Shop</h3>
        <div className="flex gap-6">
          <h4 style={{ color: "black", fontWeight: "bold" }}>Home</h4>
          <img src={arrow} alt="Left-Arrow" />
          <h4 style={{ color: "black", fontWeight: "bold" }}>Shop</h4>
        </div>
      </div>
    </div>
  );
}

export default Banner;
