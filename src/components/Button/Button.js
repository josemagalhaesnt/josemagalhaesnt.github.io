import React from "react";
import "./Button.scss";

const Button = props => {
  return (
    <button className="Button Button-animated Button--pink">
      <a href={props.link} className="about__link">
        Saiba Mais
      </a>
    </button>
  );
};

export {Button};
