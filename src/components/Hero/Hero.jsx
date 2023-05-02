import heroImg from "../../assets/img/img-01.jpg"
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
          <Button>Back</Button>
          <Button>Next</Button>
        </div>
      </div>
    </div>
  )
}

export {Hero}