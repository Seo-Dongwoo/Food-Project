import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "../../assets/css/Home/SectionButton.css";

const SectionButton = () => {
  return (
    <div className="Section-container">
      <Link to="/login">
        <Button className="section-button" buttonStyle="btn--outline">
          GET STARTED
        </Button>
      </Link>
    </div>
  );
};

export default SectionButton;
