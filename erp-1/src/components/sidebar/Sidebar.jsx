import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import logo from "../../assets/images/logo.svg";
import CloseButton from "../../assets/images/close-button.png";
import { sidebars } from "../../utils/navbar";

const Sidebar = ({ hambur, setHambur }) => {
  const [click, setClick] = useState(2);

  const changeClick = (arg) => setClick(arg);
  const changeHam = () => setHambur(!hambur);

  return (
    <span className={`sidebar ${hambur && "side-active"} `}>
      <span className="logo-group">
        <img src={logo} alt="logo image" className={` ${hambur && "ham"} `} />
        <img
          className="close-btn"
          src={CloseButton}
          width="30"
          alt=""
          onClick={changeHam}
        />
      </span>

      <ul className="menu--list sidebar--top">
        {sidebars.sidebarsPage.map((item) => {
          return (
            <Link to={item.to} key={item.id}>
              <li
                onClick={() => changeClick(item.id)}
                className={`menu--item ${click == item.id && "active"} ${
                  hambur && "ham"
                } `}
              >
                <img src={item.icon} alt={`sidebars icon ${item.title}`} />
                {item.title}
              </li>
            </Link>
          );
        })}
      </ul>

      <ul className="menu--list sidebar--bottom">
        {sidebars.sidebarsPage2.map((v) => {
          return (
            <li
              key={v.id}
              onClick={() => changeClick(v.id)}
              className={`menu--item ${click == v.id && "active"} ${
                hambur && "ham"
              } `}
            >
              <img
                src={v.icon}
                alt={`sidebars icon ${v.title}`}
                className={` ${v.id == 9 && hambur && "ham"} `}
              />
              {v.title}
            </li>
          );
        })}
      </ul>
    </span>
  );
};
export default Sidebar;
