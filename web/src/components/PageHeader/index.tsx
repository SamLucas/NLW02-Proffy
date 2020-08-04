import React from "react";

import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.svg";
import BacKIcon from "../../assets/images/icons/back.svg";

import "./styles.css";

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <div className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={BacKIcon} alt="Voltar" />
        </Link>

        <img src={Logo} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>
      </div>
    </div>
  );
};

export default PageHeader;
