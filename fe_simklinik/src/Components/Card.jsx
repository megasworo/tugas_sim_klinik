import React from "react";
import style from "../assets/Card.module.css";

const Card = function ({ title, children }) {
  return (
    <>
      <article className={style.card}>
        <h1>{title}</h1>
        {children}
      </article>
    </>
  );
};

export default Card;
