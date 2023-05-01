import heroImg from "../../assets/img/img-01.jpg"
import arrowBack from "../../assets/img/arrow-back.png"
import arrowNext from "../../assets/img/arrow-next.png"
import styles from "./Hero.module.scss"
import { Button } from "../Button"

function Hero() {
  return (
    <div className="hero">
      <div className={styles.img}>
        <img src={heroImg} alt="" />
      </div>
      <div className={styles.featureProjects}>
        <div className={styles.text1}>
          <p>Feature Projects</p>
        </div>
        <div className={styles.text2}>
          <p>The National University of Architecture</p>
        </div>
        <div className={styles.buttons}>
          <img src={arrowBack} alt="" />
          <Button text={`${arrowBack} Back`}/>
          <Button text={"Next->"}/>
        </div>
      </div>
    </div>
  )
}

export {Hero}