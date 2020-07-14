import React from "react";
import "./Navbar.scss";
import Logo from "../../assets/pace_logo.svg";
import LinkButton from "../LinkButton/LinkButton";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="navbar_container">
        <div className="navbar">
          <div className="logo_holder">
            <img src={Logo} alt="logo" />
          </div>
          <div className="nav_space"></div>
          <div className="nav_links">
            <a href="/" className="bare_link">
              Find a Job
            </a>
            <a href="/" className="bare_link">
              Sign In
            </a>
            <a href="/">
              <LinkButton small>Get Started</LinkButton>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
