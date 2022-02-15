import Button from "../components/Button";
import styles from "../style/home.module.css";

function Hero() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.hero__container}>
          <article className={styles.hero__text}>
            <h1>Award-winning custom designs and digital branding solutions</h1>
            <p>
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>

            <Button text={"learn more"} route={"/Company"} />
          </article>
          <figure className={styles.hero__ilustration}>
            <img
              src="/assets/home/desktop/image-hero-phone.png"
              alt="phone ilustration"
            />
          </figure>
        </div>
      </section>
    </div>
  );
}

export default Hero;
