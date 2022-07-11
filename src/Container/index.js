import React from "react";
import "./Container.css";

function Container(props) {
  return <div className="container">{props.children}</div>;
}

export { Container };
