import React from 'react'
import Loginmain from './Login/Loginmain';
import {link} from "react-router-dom";

export default function Loginroute() {
  return (
    <div>
        <link to="/">
          <Loginmain/>
        </link>
    </div>
  )
}
