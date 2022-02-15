import LocationCard from "../components/LocationCard";
import style from "../style/location.module.css"
const directions = [
  {country:"canada", direction:{office:"Designo Central Office" , address:"3886 Wellington Street Toronto, Ontario M9C 3J5"}, contact:{P:"P : +1 253-863-8967", M:"M : contact@designo.co"}, image:"/assets/locations/desktop/image-map-canada.png", id:"canada"},
  {country:"australia", direction:{office:"Designo AU Office" , address:"19 Balonne Street, New South Wales 2443"}, contact:{P:"P : (02) 6720 9092", M:"M : contact@designo.au"}, image:"/assets/locations/desktop/image-map-australia.png", id:"australia"},
  {country:"united kingdom", direction:{office:"Designo UK Office" , address:"3 Colorado Way, Rhyd-y-fro SA8 9GA"}, contact:{P:"P : 078 3115 1400", M:"M : contact@designo.uk"}, image:"/assets/locations/desktop/image-map-united-kingdom.png", id:"unitedKingdom"}
]
function Location() {
  return <main className={style.wrapper}>
  {directions.map((element, index) => 
    <LocationCard {...element} key={index} />
  )}
  </main>
  ;
}

export default Location;
