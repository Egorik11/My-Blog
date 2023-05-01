import heroImg from "../../assets/img/img-01.jpg"
import styles from "./Hero.module.scss"
export default function Hero() {
  return (
    <div className="hero">
      <img src={heroImg} alt="" />
      <p className={styles.text}>dsdsdsd</p>
    </div>
  )
}
