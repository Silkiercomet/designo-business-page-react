import style from "../style/project.module.css";
import ToProjects from "./ToProjects";
const routes = [
  { route: "/WebDesign", title: "web design", id:"webDesign" },
  { route: "/AppDesign", title: "app design", id:"appDesign"  },
  { route: "/GraphDesign", title: "graphic design", id:"graphicDesign"  },
];
function Design() {
  return (
    <div className="wrapper">
      <article className={style.projects}>
        {routes.map((route, index) => (
          <ToProjects {...route} key={index} routes={routes}/>
        ))}
      </article>
    </div>
  );
}

export default Design;
