import style from "../style/location.module.css";

function LocationCard({ country, direction, contact, image, id }) {
  return (
    <article id={id}>
      <div
        className={
          country === "australia" ? style.inverse__container : style.container
        }
      >
        <address className={style.address}>
          <h1>{country}</h1>
          <div className={style.address2}>
            <div>
              <p>{direction.office}</p>
              <p>{direction.address}</p>
            </div>
            <div className={style.contact}>
              <p>{contact.P}</p>
              <p>{contact.M}</p>
            </div>
          </div>
        </address>

        <figure className={style.image}>
          <img src={image} alt={country} />
        </figure>
      </div>
    </article>
  );
}

export default LocationCard;
