import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header: React.FC = () => {
  return (
    <div className="header-wrapper">
      <header>
          <img src={"/headerLogo.png"} alt="headerLogo" />

        <nav>
          <Link to={"/"}>Главная</Link>
          <Link to={"/products"}>Продукция</Link>
          <Link to={"/about"}>О компании</Link>
          <Link to={"/recepts"}>Рецепты</Link>
          <Link to={"/blog"}>Блог</Link>
          <Link to={"/contact"}>Контакты</Link>
          <Link to={"/vacancies"}>Вакансии</Link>
        </nav>

        <nav>
          <Link to={"/uz"}>UZB</Link>
          <Link to={"/ru"}>РУС</Link>
          <Link to={"/en"}>ENG</Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
