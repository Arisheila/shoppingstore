import React from 'react';
import LoginBanner from '../banner/LoginBanner';
import LoginHeader from "../header/LoginHeader";
import Login from "./Login";
import Delivery from "./Delivery";
import Footer from "../Footer/Footer";

export default function Loginmain() {
  return (
    <>
    <LoginHeader />

    <LoginBanner />
    
    <Login />
    
    <Delivery />
    
    
    <Footer />

    </>
  )
}
