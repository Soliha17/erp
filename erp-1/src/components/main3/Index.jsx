import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import BigThanIcon from "../../assets/images/big-cursor-icon.svg";
import DownloadIcon from "../../assets/images/download_to.svg";
import PrintIcon from "../../assets/images/print.svg";
import TopIcon from "../../assets/images/top-round-icon.svg";
import Checked from "../../assets/images/checked.svg";
import Wrong from "../../assets/images/wrong.svg";
import ImgDoc from "../../assets/images/img-doc.svg";

function MainThird() {
  return (
    <div className="main main--third">
      <span className="path__third">
        <Link to="/">Счёт-фактура </Link>
        <img src={BigThanIcon} alt="" />
        <a href="">Счет-фактура №03-60378 от 31.03.2021</a>
      </span>
      <span className="condition__third">
        <span className="first__condition">
          <span className="top__first">
            <div className="top__title">
              <h4>Счет-фактура</h4>
              <h5>№03-60378 от 31.03.2021</h5>
              <h6>566800736</h6>
            </div>
            <p className="top--name">Статус документа в ГНК</p>
          </span>
          <span className="middle__first">
            <p>Отправитель:</p>
            <p>
              ОБЩЕСТВО С ОГРАНИЧЕННОЙ <br /> ОТВЕТСТВЕННОСТЬЮ <br /> "VENKON
              GROUP"
            </p>
          </span>
          <span className="bottom__first">
            <div className="data-group">
              <p>Дата:</p>
              <p>2021-04-09 12:40:13</p>
            </div>
            <div className="button-group">
              <button>
                <img src={DownloadIcon} alt="" />
                Скачать{" "}
              </button>
              <button>
                <img src={PrintIcon} alt="" />
                Печать
              </button>
            </div>
          </span>
        </span>
        <div className="second__condition">
          <div className="top__second">
            <p>
              Статус: <br /> <span>ОЖИДАЕТ ВАШЕЙ ПОДПИСИ</span>
            </p>
            <a href="">
              <img src={TopIcon} alt="" />
              Прикрепить файл
            </a>
          </div>
          <div class="action-left bottom__second">
            <button class="subscribe-btn">
              <img src={Checked} alt="" />
              Подписать
            </button>
            <button class="reject-btn">
              <img src={Wrong} alt="" />
              Отменить
            </button>
          </div>
        </div>
      </span>
      <span className="img-doc">
        <img src={ImgDoc} alt="" />
      </span>
    </div>
  );
}

export default MainThird;
