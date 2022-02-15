import { useForm } from "react-hook-form";
import Locations from "../components/Locations";
import style from "../style/contact.module.css"


function Contact() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => alert("we'll be in touch");
  return <main className={style.wrapper}>
    <section className={style.container}>
      <article className={style.left__formtext}>
        <h1>Contact Us</h1>
        <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
      </article>
      <div className={style.form__container}>
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <div className={style.input__container}>
          <input {...register("Name", { required: true, minLength:3 })} type="text" placeholder="Name" className={ errors.Name ?` ${style.input__error} ${style.input}` : `${style.input}`}/>
          {errors.Name && <p className={style.error}>please use a valid name</p>}
          </div>
          <div className={style.input__container}>
          <input {...register("Email", { required: true, pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i })} type="email" placeholder="Email Address" className={ errors.Email ?` ${style.input__error} ${style.input}` : `${style.input}`}/>
          {errors.Email && <p className={style.error}>please use a valid email</p>}
          </div>
          <div className={style.input__container}>
          <input {...register("Phone", { required: true, pattern: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im })} type="tel" placeholder="phone" className={ errors.Phone ?` ${style.input__error} ${style.input}` : `${style.input}`}/>
          {errors.Phone && <p className={style.error}>please use a valid number</p>}
          </div>
          <div className={style.input__container}>
          <textarea {...register("Message")} name="message" placeholder="message" id="message" cols="30" rows="1" className={style.input}></textarea>

          </div>
          <button className={style.btn}>submit</button>
        </form>
      </div>
    </section>

    <Locations />
  </main>;
}

export default Contact;
