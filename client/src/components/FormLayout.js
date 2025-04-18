import React, { useEffect } from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Logo from "../logo.js";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./FormLayout.css";
import { clearError } from "../actions/session";

const FooterIcon = ({ icon, href }) => {
  return (
    <div>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </div>
  );
};

const FormLayout = () => {
  // Clear error messages when switch form
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => dispatch(clearError()), [location, dispatch]);

  return (
    <div className="form">
      <div className="form__header">
        <div className="form__logo">
          <Logo />
        </div>
        <h1>Welcome to VArt</h1>
        <h4>Virtual Art Gallery</h4>
      </div>
      <div className="form__body">
        <Outlet />
      </div>
      <div className="form__footer">
        <FooterIcon
          icon={<GitHubIcon />}
          href="https://www.github.com/kingyiusuen"
        />
        <FooterIcon
          icon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/kingyiusuen"
        />
      </div>
    </div>
  );
};

export default FormLayout;
