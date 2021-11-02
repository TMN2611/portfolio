import React from "react";
import { Link } from "react-router-dom";
export default function RectangularButton({
  size = "normal",
  buttonTitle,
  mainColor,
  linkAdress,
  linkRouterDom,
  handleClick,
  classAdd,
}) {
  const Component = (() => {
    if (linkRouterDom) {
      return Link;
    } else if (linkAdress) {
      return "a";
    } else {
      return "button";
    }
  })();

  return (
    <Component
      className={`btn btn-${size} ${classAdd}`}
      style={{ borderColor: mainColor }}
      to={linkRouterDom}
      href={linkAdress}
      onClick={handleClick}
    >
      {buttonTitle}
    </Component>
  );
}
