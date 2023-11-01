import React from "react";
import s from './HeaderLogos.module.css';
import logo1 from "./../../img/top-logo-1.png";
import logo2 from "./../../img/top-logo-2.png";
import logo3 from "./../../img/top-logo-3.png";

const HeaderLogos = (props) => {
    return  <div className={s.headerLogosList}>
                <ul>
                <li><img alt="Specialty Coffee Association" src={logo1}/></li>
                <li><img alt="World Aeropress Champs" src={logo2}/></li>
                <li><img alt="AeroPress" src={logo3}/></li> 
                </ul>
            </div>
}


export default HeaderLogos;