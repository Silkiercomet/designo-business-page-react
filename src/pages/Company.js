// import {Link} from "react-router-dom";
import CompanyCard from "../components/CompanyCard";
import Locations from "../components/Locations";
import style from "../style/company.module.css"
const aboutData = [
  {title:"About Us", id:"aboutUs", para:"Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences."},
  {title:"World-class talent", id:"talent", para:`We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.`, para2: "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.", inverse:true},
  {title:"The real deal", id:"realDeal", para:"As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.", para2:"We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."}
]
function Company() {
  return <main className={style.wrapper}>
      <CompanyCard {...aboutData[0]} />
      <CompanyCard {...aboutData[1]} />

      <Locations />

      <CompanyCard {...aboutData[2]} />
  </main>;
}

export default Company;
