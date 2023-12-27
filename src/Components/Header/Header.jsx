import React from "react";
import "./Header.css";
import { FaChevronRight } from "react-icons/fa";

const Header = () => {
  return (
    <div className="hero">
      <div>
        <span>
          <a href="">Home</a>
          <span>
            <FaChevronRight style={{fontSize:'0.8rem'}}/>
          </span>
          <span>Explore all MF Ranks</span>
        </span>
        <h2>Explore All MF Ranks</h2>
      </div>
    </div>
  );
};

export default Header;
