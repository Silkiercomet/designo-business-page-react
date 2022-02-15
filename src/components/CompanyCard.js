import React from "react";
import style from "../style/company.module.css";
function CompanyCard({ title, id, para, para2, inverse = false }) {
  return (
    <article className={style.company__card} id={id}>
      <div className={inverse ? style.inverse__container : style.container}>
        <div className={style.text__card}>
          <h1>{title}</h1>
          <p>{para}</p>
          {para2 && <p>{para2}</p>}
        </div>
        <aside className={style.image__card_company}></aside>
      </div>
    </article>
  );
}

export default CompanyCard;
