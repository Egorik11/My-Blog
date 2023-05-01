import styles from "./Header.module.scss"
import logo from "../../assets/img/logo-01.png"
import {Navlist} from "./Navlist/Navlist"

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="The Box" />
      </div>
      <Navlist/>
    </div>
  )
}

export default Header;