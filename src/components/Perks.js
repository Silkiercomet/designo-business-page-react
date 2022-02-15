import style from "../style/perks.module.css"

function Perks() {
    const perks = [
        {heading: "PASSIONATE",
        text: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
        imagen: "/assets/home/desktop/illustration-passionate.svg"},
        {heading: "RESOURCEFUL",
        text: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
        imagen: "/assets/home/desktop/illustration-resourceful.svg"},
        {heading: "FRIENDLY",
        text: "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
        imagen: "/assets/home/desktop/illustration-friendly.svg"}
      ]
  return <div className="wrapper">
  <ul className={style.perk}>
    {perks.map((perk, index) => <li className={style.card} key={index}>
        <div className={style.background__container} >
        <img src={perk.imagen} alt={perk.heading} />
        <div className={style.background} ></div>
        </div>
        <h2>{perk.heading}</h2>
        <p>{perk.text}</p>
    </li>)}
  </ul>
</div>;
}

export default Perks;
