import React from 'react'
import Loginmain from './Login/Loginmain';
import {Link} from "react-router-dom";

export default function Loginroute() {
  return (
    <div>
        <Link to="/">
          <Loginmain/>
        </Link>
    </div>
  )
}
