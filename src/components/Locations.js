import style from "../style/location.module.css"
import Button from "./Button"
let location = [
    {country:"united kingdom",image:"/assets/shared/desktop/illustration-united-kingdom.svg",route:"/Location#unitedKingdom"},
    {country:"canada",image:"/assets/shared/desktop/illustration-canada.svg",route:"/Location#canada"},
    {country:"australia",image:"/assets/shared/desktop/illustration-australia.svg",route:"/Location#australia"}
]
function Locations() {
  return (
    <menu className={style.location__menu}>
        {location.map((element, index) => <li className={style.card__country} key={index}>
            <figure className={style.background__container}>
                <img src={element.image} alt={element.country} />
                <div className={style.background} ></div>
            </figure>
            <h2>{element.country}</h2>
            <Button text="SEE LOCATION" route={element.route}/>
        </li>)}
    </menu>
  )
}

export default Locations