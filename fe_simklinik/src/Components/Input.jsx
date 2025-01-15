import React from "react";
import style from "../assets/Input.module.css"

const Input = function ({ label, type = "text" }) {
  return (
    <>
      <label htmlFor={label}>{label}:</label>
      <input id={label} name={label} type={type} className={style.input} />
    </>
  );
};

export default Input;
