import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

import DownloadIcon from "../../assets/images/download-icon.svg";
import ExcelImg from "../../assets/images/excel-img.svg";
import PlusExcel from "../../assets/images/excel-plus.svg";
import Checked from "../../assets/images/checked.svg";
import Wrong from "../../assets/images/wrong.svg";

function MainSecond() {
  return (
    <main className="main main--second">
      <div className="main__title-group">
        <h1 className="first-h1">Создание документа: Счёт-фактура</h1>
        <button className="blue-reject-btn">Назад/Отменить</button>
      </div>
      <div className="main__top">
        <div className="input-group__top">
          <h5>Тип счета </h5>
          <form action="action_form.php" target="_top">
            <select className="select">
              <option value="status" default>
                Стандарт
              </option>
              <option value="books">Книги</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="php">PHP</option>
              <option value="js">JavaScript</option>
            </select>
          </form>
        </div>
        <div className="input-group--row">
          <div className="input-group__top">
            <h5>Номер счет-фактуры </h5>
            <input type="text" placeholder="Номер счет-фактуры" />
          </div>
          <div className="input-group__top">
            <h5>Дата документа</h5>
            <input type="text" placeholder="Дата документа" />
          </div>
        </div>
        <div className="input-group--row">
          <div className="input-group__top">
            <h5>Введите номер контракта</h5>
            <input type="text" placeholder="Введите номер контракта" />
          </div>
          <div className="input-group__top">
            <h5>Дата до </h5>
            <input type="text" placeholder="Дата контракта" />
          </div>
        </div>
      </div>
      <div className="main__middle">
        <div className="main__title">
          <h4>Ваша информация</h4>
          <h4>Информация о подрядчике</h4>
        </div>
        <div className="input-groups-box">
          <div className="input-group--row">
            <div className="input-group__middle">
              <h5>ИНН</h5>
              <form action="action_form.php" target="_top">
                <select className="select">
                  <option value="status" default>
                    Стандарт
                  </option>
                  <option value="books">Книги</option>
                  <option value="html">HTML</option>
                  <option value="css">CSS</option>
                  <option value="php">PHP</option>
                  <option value="js">JavaScript</option>
                </select>
              </form>
            </div>
            <div className="input-group__middle required-group__middle">
              <div className="required-input-group">
                <h5>
                  Номер счета <span className="red-star">*</span>
                </h5>
                <input type="text" placeholder="Номер счет-фактуры" required />
              </div>
              <div className="required-toggle-group">
                <p>Односторонний счет?</p>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="input-group--row">
            <div className="input-group__middle">
              <h5>НДС регистрационный номер</h5>
              <input
                type="text"
                className="big-input"
                placeholder="Введите данные"
              />
            </div>
            <div className="input-group__middle">
              <h5>Компания-партнер</h5>
              <input
                type="text"
                className="big-input"
                placeholder="Введите данные"
              />
            </div>
          </div>
          <div className="input-group--row">
            <div className="input-group__middle">
              <h5>Номер счета</h5>
              <input
                type="text"
                className="small-input"
                placeholder="Введите данные"
              />
            </div>
            <div className="input-group__middle">
              <h5>Номер счета</h5>

              <input
                type="text"
                className="small-input"
                placeholder="Введите данные"
              />
            </div>
            <div className="input-group__middle">
              <h5>Номер счета</h5>

              <input
                type="text"
                className="small-input"
                placeholder="Введите данные"
              />
            </div>
            <div className="input-group__middle">
              <h5>МФО</h5>

              <input
                type="text"
                className="small-input"
                placeholder="Введите данные"
              />
            </div>
          </div>
          <div className="input-group--row">
            <div className="input-group__middle">
              <h5>Адрес</h5>
              <input
                type="text"
                className="big-input"
                placeholder="Введите данные"
              />
            </div>
            <div className="input-group__middle">
              <h5>Адрес</h5>
              <input
                type="text"
                className="big-input"
                placeholder="Введите данные"
              />
            </div>
          </div>
          <div className="input-group--row">
            <div className="input-group__middle">
              <h5>Директор</h5>
              <input
                type="text"
                className="small-input"
                placeholder="Введите данные"
              />
            </div>
            <div className="input-group__middle">
              <h5>Главный бухгалтер</h5>

              <input
                type="text"
                className="small-input"
                placeholder="Введите данные"
              />
            </div>
            <div className="input-group__middle">
              <h5>Директор</h5>

              <input
                type="text"
                className="small-input"
                placeholder="Введите данные"
              />
            </div>
            <div className="input-group__middle">
              <h5>Главный бухгалтер</h5>

              <input
                type="text"
                className="small-input"
                placeholder="Введите данные"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="main-excel">
        <div className="download-group">
          <Link>
            <img src={DownloadIcon} alt="" />
            Загрузить из Excel
          </Link>
          <Link>
            <img src={DownloadIcon} alt="" />
            Скачать шаблон
          </Link>
        </div>
        <span className="excel-img">
          <img src={ExcelImg} alt="" />
        </span>
        <span className="excel-summa">
          <p>Итого: 0.00</p>
          <p>
            Добавить строку
            <img src={PlusExcel} alt="" />
          </p>
        </span>
      </div>
      <div className="main__trust">
        <span className="top__trust">
          <h2>Доверенность</h2>
          <form action="action_form.php" target="_top">
            <select className="select">
              <option value="status" default>
                Стандарт
              </option>
              <option value="books">Книги</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="php">PHP</option>
              <option value="js">JavaScript</option>
            </select>
          </form>
        </span>
        <span className="bottom__trust">
          <div className="input-group--row">
            <div className="input-group__middle">
              <h5>Номер счета</h5>
              <input
                type="text"
                className="small-input"
                placeholder="Введите данные"
              />
            </div>
            <div className="input-group__middle">
              <h5>Номер счета</h5>

              <input
                type="text"
                className="small-input"
                placeholder="Введите данные"
              />
            </div>
            <div className="input-group__middle">
              <h5>Номер счета</h5>

              <input
                type="text"
                className="small-input"
                placeholder="Введите данные"
              />
            </div>
            <div className="input-group__middle">
              <h5>МФО</h5>
              <input
                type="text"
                className="small-input"
                placeholder="Введите данные"
              />
            </div>
          </div>
        </span>
      </div>
      <div className="main__footer">
        <div className="action-left">
          <button className="reject-btn">
            <img src={Wrong} alt="" />
            Отменить
          </button>
          <button className="subscribe-btn">
            <img src={Checked} alt="" />
            Показать документ
          </button>
        </div>
        <div className="right__footer">
          <button>Сохранить</button>
          <button>Подписать</button>
        </div>
      </div>
    </main>
  );
}

export default MainSecond;
