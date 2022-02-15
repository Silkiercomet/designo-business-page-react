import React from 'react';
import style from "../style/layout.module.css"
import { Link } from "react-router-dom";
function Button({text, route}) {
  return <Link to={route} className={style.banner__btn}>
            {text}
        </Link>;
}

export default Button;
