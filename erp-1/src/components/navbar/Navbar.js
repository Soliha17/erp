import React, { useState } from "react";

import "./navbar.css";

import Summa from "../../assets/images/summa.svg";
import Ring from "../../assets/images/ring.svg";
import Question from "../../assets/images/question-mark.svg";
import Menu from "../../assets/images/free-icon-main-menu-5785429.png";
import SettingNavbar from "../../assets/images/settings-navbar.svg";

function Navbar({ hambur, setHambur }) {

  const changeHam = (() => setHambur(!hambur))
  return (
    <nav className="navbar">
      <div className="navbar--info">
        <h3>YaTT SOBIROV JAMSHID DAVRON O'G'LI</h3>
        <p>566800736</p>
      </div>
      <div className="navbar--menu">
        <div className="navbar--condition">
          <div className="info__condition">
            <div className="img__info">
              <img src={Summa} alt="summa icon" />
            </div>
            <div onClick={changeHam} className="title__info">
              <p>Ваш баланс:</p>
              <h6>150.000 сум</h6>
            </div>
          </div>
          <button className="active">Активировать тариф</button>
        </div>
        <div className="navbar--action">
          <img src={Ring} alt="ring icon" />
          <img src={Question} alt="question-mark icon" />
          <img src={SettingNavbar} alt="settings-navbar icon" />
        </div>
      </div>
      <button className="menu-toggle">
        <img src={Menu} alt="" width="27" />
      </button>
    </nav>
  );
}

export default Navbar;
