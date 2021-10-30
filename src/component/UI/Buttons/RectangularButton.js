import React from "react";
import { Link } from "react-router-dom";
export default function RectangularButton({
  size = "normal",
  buttonTitle,
  mainColor,
  linkAdress,
  handleClick,
}) {
  const Component = linkAdress ? Link : "button";
  return (
    <Component
      className={`btn btn-${size}`}
      style={{ borderColor: mainColor }}
      to={linkAdress}
      onClick={handleClick}
    >
      {buttonTitle}
    </Component>
  );
}
