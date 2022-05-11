import React from "react";
import MenuItem from '../components/MenuItem'
import { MenuList } from "../helpers/MenuList";
import "../Styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Nuestros Trabajos</h1>
      <div className="menuList">
            <MenuItem slides={MenuList}/>
      </div>
    </div>
  );
}

export default Menu;