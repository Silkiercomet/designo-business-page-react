import style from "../style/card.module.css"

 
function Card({title, about, image}) {
  return (
    <article className={style.card}>
    <img src={image} alt={title} />
    <div className={style.text}>
        <h1>{title}</h1>
        <p>{about}</p>
    </div>
    </article>
  )
}

export default Card