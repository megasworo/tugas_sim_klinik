import React from "react";
import style from "../assets/Submit.module.css";

const Submit = function ({ name, onClick }) {
  return (
    <>
      <button onClick={onClick} className={style.submit}>
        {name}
      </button>
    </>
  );
};

export default Submit;
