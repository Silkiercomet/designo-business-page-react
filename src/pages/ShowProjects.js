import Card from "../components/Card";
import ToProjects from "../components/ToProjects";
import style from "../style/showprojects.module.css";
const routes = [
  { route: "/WebDesign", title: "web design", id: "webDesign" },
  { route: "/AppDesign", title: "app design", id: "appDesign" },
  { route: "/GraphDesign", title: "graphic design", id: "graphicDesign" },
];
function ShowProjects({ header, subHeader, projects }) {
  const filteredList = routes.filter(
    (element) => element.title !== header.toLowerCase()
  );
  return (
    <div className={style.wrapper}>
      <section className={style.banner}>
        <h1>{header}</h1>
        <p>{subHeader}</p>
      </section>

      <menu className={style.grid__projects}>
        {projects.map((project, index) => (
          <Card {...project} key={index} />
        ))}
      </menu>

      <section className={style.other__projects}>
        {filteredList.map((element, index) => (
          <ToProjects {...element} key={index} />
        ))}
      </section>
    </div>
  );
}

export default ShowProjects;
