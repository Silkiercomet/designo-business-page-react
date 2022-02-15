import { Link } from "react-router-dom";
import style from "../style/project.module.css";

function ToProjects({ route, title, id }) {
  return (
    <Link to={route} className={style.design}>
      <section className={style.card} id={id}>
        <h1>{title}</h1>
        <p>view projects</p>
      </section>
    </Link>
  );
}

export default ToProjects;
