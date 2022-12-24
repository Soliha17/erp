import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";
import { linksOfMainFirts } from "../../utils/firtsMainLinks";

import { imagePath } from "../../utils/mainOneImages";

function MainFirst() {
  const [hover, setHover] = useState(1);
  const changeHover = (id) => setHover(id);
  return (
    <main className="main">
      <h1 className="first-h1">Документы</h1>
      <div className="action-group">
        {linksOfMainFirts.map((link) => (
          <Link
            to={link.to}
            key={link.id}
            className={`anchor ${hover == link.id && "active-link"}`}
            onClick={() => changeHover(link.id)}
          >
            {link.text}
          </Link>
        ))}
      </div>
      <div className="filter-group">
        <div className="filter--top">
          <h3>Фильтр</h3>
          <p>Сбросить фильтр</p>
        </div>
        <div className="filter--bottom">
          <div className="doc-number">
            <h4>Номер документа</h4>
            <input type="text" placeholder="Номер документа" />
          </div>
          <div className="status-doc">
            <h4>Статус документа</h4>
            <form action="action_form.php" target="_top">
              <select className="select">
                <option value="status" default>
                  Статус документа
                </option>
                <option value="books">Книги</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="php">PHP</option>
                <option value="js">JavaScript</option>
              </select>
            </form>
          </div>
          <div className="search-kont">
            <h4>Поиск по контрагенту</h4>
            <input type="text" placeholder="Номер документа" />
          </div>
          <div className="data-from">
            <h4>Дата с</h4>
            <input
              type="date"
              id="start"
              name="trip-start"
              defaultValue="2020-01-01"
            />
          </div>
          <div className="data-to">
            <h4>Дата до</h4>
            <input
              type="date"
              id="start"
              name="trip-start"
              defaultValue="2020-01-01"
            />
          </div>
        </div>
      </div>
      <div className="table-group">
        <div className="table--top">
          <div className="action-flex">
            <h1>Таблица</h1>
            <div className="action-boxes">
              <div className="action--box">
                <div>
                  <img src={imagePath.red} alt="svg" />
                </div>
                <p>Отменен</p>
              </div>
              <div className="action--box">
                <div>
                  <img src={imagePath.green} alt="svg" />
                </div>
                <p>Подписано</p>
              </div>
              <div className="action--box">
                <div>
                  <img src={imagePath.yellow} alt="svg" />
                </div>
                <p>В ожидании</p>
              </div>
              <div className="action--box">
                <div>
                  <img src={imagePath.grey} alt="svg" />
                </div>
                <p>Черновик</p>
              </div>
            </div>
          </div>
          <div className="button-group__table">
            <button className="open-in-excel--btn">Открыть в Exсel</button>
            <button className="filter-table--btn">
              <img src={imagePath.filter} alt="" />
              Фильтр таблицы
            </button>
          </div>
        </div>
        <div className="res-table">
          <table className="table">
            <thead className="thead">
              <tr>
                <th>
                  <input type="checkbox" name="" id="" />
                </th>
                <th>Статус</th>
                <th>Тип документа</th>
                <th>Дата обновления</th>
                <th>Контрагент</th>
                <th>Номер и дата документа</th>
                <th>Номер и дата договора</th>
                <th>Стоимость поставки</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <img src={imagePath.red} />
                </td>
                <td>Счет-фактура (вх.)</td>
                <td>09.03.2021</td>
                <td>ООО VENKON GROUP</td>
                <td>998998933800</td>
                <td>02-53519 от 28.02.2021</td>
                <td>Публичная оферта от 15.12.2020</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <img src={imagePath.yellow} />
                </td>
                <td>Счет-фактура (вх.)</td>
                <td>09.03.2021</td>
                <td>ООО VENKON GROUP</td>
                <td>998998933800</td>
                <td>02-53519 от 28.02.2021</td>
                <td>Публичная оферта от 15.12.2020</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <img src={imagePath.green} />
                </td>
                <td>Счет-фактура (вх.)</td>
                <td>09.03.2021</td>
                <td>ООО VENKON GROUP</td>
                <td>998998933800</td>
                <td>02-53519 от 28.02.2021</td>
                <td>Публичная оферта от 15.12.2020</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <img src={imagePath.grey} />
                </td>
                <td>Счет-фактура (вх.)</td>
                <td>09.03.2021</td>
                <td>ООО VENKON GROUP</td>
                <td>998998933800</td>
                <td>02-53519 от 28.02.2021</td>
                <td>Публичная оферта от 15.12.2020</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <img src={imagePath.green} />
                </td>
                <td>Счет-фактура (вх.)</td>
                <td>09.03.2021</td>
                <td>ООО VENKON GROUP</td>
                <td>998998933800</td>
                <td>02-53519 от 28.02.2021</td>
                <td>Публичная оферта от 15.12.2020</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="main--bottom">
        <div className="bottom--action">
          <div className="action-left">
            <button className="subscribe-btn">
              <img src={imagePath.checked} alt="" />
              Подписать
            </button>
            <button className="reject-btn">
              <img src={imagePath.wrong} alt="" />
              Отменить
            </button>
          </div>
          <div className="action-right">
            <div className="show-by--group">
              <div className="select--box">
                <p>Показать по:</p>
                <select className="mySelect">
                  <option>12</option>
                  <option>15</option>
                  <option>18</option>
                  <option>54</option>
                  <option>19</option>
                </select>
              </div>
            </div>
            <div className="sinx--group">
              <button className="sinx-btn">Синхронизация с ГНК</button>
              <button className="register-btn">
                Реестр
                <img src={imagePath.reestr} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="bottom-pagination">
          <ul className="pagination">
            <li>
              <Link to="">
                <img src={imagePath.left} alt="" />
                Назад
              </Link>
            </li>
            <li className="active">
              <Link to="">1</Link>
            </li>
            <li>
              <Link to="">2</Link>
            </li>
            <li>
              <Link to="">3</Link>
            </li>
            <li>
              <Link to="">...</Link>
            </li>
            <li>
              <Link to="">16</Link>
            </li>
            <li>
              <Link to="">
                Следующая
                <img src={imagePath.right} alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default MainFirst;
