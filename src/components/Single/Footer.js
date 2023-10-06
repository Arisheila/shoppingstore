import React from "react";
import {BsFacebook} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer text-[#9f9f9f] text-[16px]">
      <div>
        <div className="flex items-center mt-8">
          <p>SKU </p>
          <p>: SS001</p>
        </div>
        <div className="flex items-center mt-4">
          <p>Category </p>
          <p>: Sofas</p>
        </div>
        <div className="flex items-center mt-4">
          <p>Tags</p>
          <p>: Sofa, Chair, Home, Shop</p>
        </div>
        <div className="flex items-center mt-4">
          <p>Share</p>
          <p className="flex items-center gap-8">
            :
            <BsFacebook />
            <BsLinkedin />
            <FaTwitter />
            
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
