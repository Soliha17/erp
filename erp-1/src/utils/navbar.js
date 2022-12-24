import Plus from "../assets/images/plus.svg";
import BottomArrow from "../assets/images/bottom-arrow.svg";
import TopArrow from "../assets/images/top-arrow.svg";
import Saving from "../assets/images/saving.svg";
import Deleting from "../assets/images/deleting.svg";
import Support from "../assets/images/support.svg";
import Settings from "../assets/images/settings.svg";
import Logout from "../assets/images/logout.svg";
import OneC from "../assets/images/1c.svg"


export const sidebars = {
  sidebarsPage: [
    { id: 1, icon: Plus, title: "Создать (2)", to: "/second" },
    { id: 2, icon: BottomArrow, title: "Входящие (2)", to: "" },
    { id: 3, icon: TopArrow, title: "Исходящие (2)", to: "" },
    { id: 4, icon: Saving, title: "Сохраненные (0)", to: "" },
    { id: 5, icon: Deleting, title: "Сохраненные (0)", to: "" },
  ],
  sidebarsPage2: [
    {
      id: 6,
      icon: Support,
      title: `Тех поддержка: +998 99 999 99 99`,
      to: "",
    },
    { id: 7, icon: Settings, title: "Настройки", to: "" },
    { id: 8, icon: Logout, title: "Выйти", to: "" },
    { id: 9, icon: OneC, to: "" },
  ],
};