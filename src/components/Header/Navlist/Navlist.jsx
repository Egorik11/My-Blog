import Navitem from "../NavItem/Navitem"
import styles from './Navlist.module.scss'
export function Navlist() {
  return (
    <div className={styles.navlist}>
      <Navitem navItem={'Home'}/>
      <Navitem navItem={'About us'}/>
      <Navitem navItem={'Projects'}/>
      <Navitem navItem={'Services'}/>
      <Navitem isActive={true} navItem={'Contact Us'}/>
    </div>
  )
}